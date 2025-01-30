import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { barangs = { data: [] } } = usePage().props; // Default agar tidak error jika undefined

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Barang
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Nama Barang</th>
                            <th className="p-2">Harga Barang</th>
                        </tr>
                    </thead>
                    <tbody>
                        {barangs.data.map((barang, index) => (
                            <tr key={barang.id} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{barang.nama}</td>
                                <td className="p-2">Rp. {barang.harga.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
