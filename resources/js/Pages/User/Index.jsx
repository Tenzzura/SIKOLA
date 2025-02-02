import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const { users } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    const { delete: deleteUser } = useForm();

    // Handle delete action
    const handleDelete = (userId) => {
        setUserIdToDelete(userId);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        deleteUser(route('users.destroy', userIdToDelete), {
            method: 'DELETE', // Make sure to use DELETE method
            onSuccess: () => {
                setIsModalOpen(false); // Close modal on success
            },
        });
    };

    const cancelDelete = () => {
        setIsModalOpen(false); // Close modal when cancelled
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                {/* Table and other content */}
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-5" colSpan="5">
                                <Link
                                    href={route('users.create')}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Tambah User
                                </Link>
                            </th>
                        </tr>
                        <tr className="border-b">
                            <th className="p-2">No</th>
                            <th className="p-2">Nama</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Role</th>
                            <th className="p-2 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user, index) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">
                                    {user.roles && user.roles.length > 0
                                        ? user.roles.map((role, idx) => (
                                            <span key={idx}>{role.name}{idx < user.roles.length - 1 && ', '}</span>
                                        ))
                                        : <span>No Role</span>
                                    }
                                </td>
                                <td className="p-2 text-center">
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

            {/* Modal for Delete Confirmation */}
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
                                onClick={cancelDelete}
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
