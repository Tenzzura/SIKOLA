import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditUser({ user, roles = [] }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        password: '', // Biarkan kosong, hanya update jika diisi
        role: user?.role || '', // Menggunakan role langsung dari user
    });

    function submit(e) {
        e.preventDefault();
        put(route('users.update', user.id), {
            onSuccess: () => window.location.href = route('users.index')
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title="Edit User" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Edit User</h2>

                    <form onSubmit={submit}>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Nama</label>
                                <input
                                    type="text"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Password (Kosongkan jika tidak ingin diubah)</label>
                                <input
                                    type="password"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Role</label>
                                <select
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.role}
                                    onChange={e => setData('role', e.target.value)}
                                >
                                    <option value="">Pilih Role</option>
                                    {roles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                                {errors.role && <div className="text-red-500 text-sm mt-2">{errors.role}</div>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg"
                            >
                                {processing ? 'Memperbarui...' : 'Perbarui User'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
