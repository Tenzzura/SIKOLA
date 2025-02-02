import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function CreateUser() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        role: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('users.store'), {
            onSuccess: () => window.location.href = route('users.index')
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title="Tambah User" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative flex items-center justify-center mb-6">
                        <Link 
                            href={route('users.index')}
                            className="absolute left-0 p-2 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition"
                        >
                            <ArrowLeft size={22} className="text-black" />
                        </Link>
                        <h2 className="text-2xl font-semibold text-gray-800">Tambah User</h2>
                    </div>

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
                                <label className="text-sm font-medium text-gray-700">Password</label>
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
                                    <option value="admin">Admin</option>
                                    <option value="user">Petugas</option>
                                </select>
                                {errors.role && <div className="text-red-500 text-sm mt-2">{errors.role}</div>}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={processing}
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
