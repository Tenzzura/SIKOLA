import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';

export default function BarangIndex() {
    const { barang } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Daftar Barang" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-5" colSpan="6">
                                <Link href={route('barang.create')} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Tambah Barang
                                </Link>
                            </th>
                        </tr>
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Nama Barang</th>
                            <th className="p-2">Stok</th>
                            <th className="p-2">Harga Satuan</th>
                            <th className="p-2">Kategori</th>
                            <th className="p-2">Tanggal Datang</th>
                        </tr>
                    </thead>
                    <tbody>
                        {barang.data.map((item, index) => (
                            <tr key={item.BarangID} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.NamaBarang}</td>
                                <td className="p-2">{item.StokBarang}</td>
                                <td className="p-2">{item.HargaSatuan}</td>
                                <td className="p-2">{item.KategoriBarang}</td>
                                <td className="p-2">{item.TanggalDatang}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
