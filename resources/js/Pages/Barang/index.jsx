import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';

export default function BarangIndex() {
    const { barang } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Daftar Barang" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Nama Barang</th>
                            <th className="p-2">Stok</th>
                            <th className="p-2">Harga Satuan</th>
                            <th className="p-2">Kategori</th>
                            <th className="p-2">Tanggal Datang</th>
                            <th className="p-2 flex items-center justify-end">
                                {/* "+" Button positioned at the left of "Role" */}
                                <Link 
                                    href={route('barang.create')} 
                                    className="border border-blue-500 text-blue-500 p-2 rounded-full flex items-center justify-center bg-white hover:bg-blue-100 transition"
                                >
                                    <Plus size={18} />
                                </Link>
                            </th>
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
