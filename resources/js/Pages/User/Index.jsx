import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Dashboard() {
    const { users } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    const { delete: deleteUser } = useForm();

    const handleDelete = (userId) => {
        setUserIdToDelete(userId);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        deleteUser(route('users.destroy', userIdToDelete), {
            method: 'DELETE',
            onSuccess: () => {
                setIsModalOpen(false);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Nama</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Role</th>
                            <th className="p-2 flex items-center justify-end">
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
                        {users.data.map((user, index) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">
                                    {user.role ? user.role.role : <span className="text-gray-500">No Role</span>}
                                </td>

                                <td className="p-2 flex items-center justify-end">
                                    <Link
                                        href={route('users.edit', user.id)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Konfirmasi Hapus</h3>
                        <p className="text-gray-600 mb-4">Apakah Anda yakin ingin menghapus user ini?</p>
                        <div className="flex justify-between">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Hapus
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
