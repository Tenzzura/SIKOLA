import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, router } from '@inertiajs/react'; // Tambahkan router
import { Plus, Edit, Trash } from 'lucide-react';

export default function BarangIndex() {
    const { barang } = usePage().props;

    // Fungsi untuk menangani penghapusan barang
    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus barang ini?')) {
            router.delete(route('barang.destroy', id));
        }
    };

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
                            <tr key={item.id} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.NamaBarang}</td>
                                <td className="p-2">{item.StokBarang}</td>
                                <td className="p-2">{item.HargaSatuan}</td>
                                <td className="p-2">{item.KategoriBarang}</td>
                                <td className="p-2">{item.TanggalDatang}</td>
                                <td className="p-2 flex items-center gap-2 justify-end">
                                    {/* Tombol Edit */}
                                    <Link 
                                        href={route('barang.edit', item.id)}  
                                        className="text-green-500 hover:text-green-700 transition"
                                    >
                                        <Edit size={18} />
                                    </Link>

                                    {/* Tombol Hapus */}
                                    <button 
                                        onClick={() => handleDelete(item.id)}  
                                        className="text-red-500 hover:text-red-700 transition"
                                    >
                                        <Trash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
