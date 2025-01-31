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
