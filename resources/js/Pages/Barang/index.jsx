import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Barang() {
    const { barang } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Barang" />

            

            <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Nama Barang</th>
                            <th className="p-2">Harga Barang</th>
                            <th className="p-2 flex items-center justify-between">
                                Role
                                {/* "+" Button positioned at the left of "Role" */}
                                <Link 
                                    href={route('users.create')} 
                                    className="border border-blue-500 text-blue-500 p-2 rounded-full flex items-center justify-center bg-white hover:bg-blue-100 transition"
                                >
                                    <Plus size={18} />
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {barang.data.map((barang, index) => (
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
