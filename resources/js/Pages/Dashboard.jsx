import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Bell, Mail, Settings, Search } from 'lucide-react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // ✅ Fungsi logout menggunakan Inertia.js (POST request)
    const handleLogout = (e) => {
        e.preventDefault();
        Inertia.post("/logout");
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            
            {/* Header */}
            <div className="bg-white border-b py-4 px-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <Search className="text-gray-500" />
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <Mail className="text-gray-500" />
                    </div>
                    <div className="relative">
                        <Bell className="text-gray-500" />
                    </div>
                    
                    {/* Settings Dropdown */}
                    <div className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
                            <Settings className="text-gray-500" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                                {/* Replace the logout link with a button */}
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center space-x-2">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A8PhcI7V3miXTmY26npWgI2nFvNxDRs_bg&s" 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full border"
                        />
                        <div>
                            <p className="font-semibold">SiKoLa</p>
                            <p className="text-gray-500 text-sm">Admin</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Total Jatuh Tempo Pembelian</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Total Penjualan Terutang</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Jumlah Penjualan Total</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Jumlah Biaya Total</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-orange-400 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Pelanggan</p>
                    </div>
                    <div className="bg-blue-400 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Pemasok</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Faktur Pembelian</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Faktur Penjualan</p>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Produk Baru Ditambahkan</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">No</th>
                                <th className="p-2">Produk</th>
                                <th className="p-2">Harga</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
