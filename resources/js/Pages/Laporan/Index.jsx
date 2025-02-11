import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { Plus, Edit, Trash } from 'lucide-react';

export default function LaporanIndex() {
    const { laporan } = usePage().props;

    // Fungsi untuk menangani penghapusan laporan
    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus laporan ini?')) {
            router.delete(route('laporan.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Daftar Laporan" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Tipe Laporan</th>
                            <th className="p-2">Tanggal Awal</th>
                            <th className="p-2">Tanggal Akhir</th>
                            <th className="p-2">Total Transaksi</th>
                            <th className="p-2">Total Pendapatan</th>
                            <th className="p-2 flex items-center justify-end">
                                <Link 
                                    href={route('laporan.create')} 
                                    className="border border-blue-500 text-blue-500 p-2 rounded-full flex items-center justify-center bg-white hover:bg-blue-100 transition"
                                >
                                    <Plus size={18} />
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {laporan.data.map((item, index) => (
                            <tr key={item.LaporanID} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.TipeLaporan}</td>
                                <td className="p-2">{item.TanggalAwal}</td>
                                <td className="p-2">{item.TanggalAkhir}</td>
                                <td className="p-2">{item.TotalTransaksi}</td>
                                <td className="p-2">{item.TotalPendapatan}</td>
                                <td className="p-2 flex items-center gap-2 justify-end">
                                    <Link 
                                        href={route('laporan.edit', item.LaporanID)} 
                                        className="text-green-500 hover:text-green-700 transition"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(item.LaporanID)} 
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
