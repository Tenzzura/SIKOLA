import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Bell, Mail, Search } from 'lucide-react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth, barangs }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                    <Mail className="text-gray-500" />
                    <Bell className="text-gray-500" />

                    {/* User Profile Dropdown */}
                    <div className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 focus:outline-none">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A8PhcI7V3miXTmY26npWgI2nFvNxDRs_bg&s" 
                                alt="Profile" 
                                className="w-10 h-10 rounded-full border"
                            />
                            <div>
                                <p className="font-semibold">{auth.user?.name || "Guest"}</p>
                                <p className="text-gray-500 text-sm">{auth.user?.role || "User"}</p>
                            </div>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {["Total Jatuh Tempo Pembelian", "Total Penjualan Terutang", "Jumlah Penjualan Total", "Jumlah Biaya Total"].map((text, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                            <p className="text-lg font-semibold">Rp.0</p>
                            <p className="text-gray-500">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { color: "bg-orange-400", title: "Pelanggan" },
                        { color: "bg-blue-400", title: "Pemasok" },
                        { color: "bg-gray-800", title: "Faktur Pembelian" },
                        { color: "bg-green-500", title: "Faktur Penjualan" },
                    ].map((item, index) => (
                        <div key={index} className={`${item.color} text-white p-4 shadow-md rounded-lg flex items-center justify-between`}>
                            <p className="text-xl font-bold">0</p>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

                {/* Produk Baru Ditambahkan */}
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
                        <tbody>
                            {Array.isArray(barangs) && barangs.length > 0 ? (
                                barangs.map((item, index) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="p-2">{index + 1}</td>
                                        <td className="p-2">{item.NamaBarang || "Nama Tidak Tersedia"}</td>
                                        <td className="p-2">Rp.{item.HargaSatuan ? item.HargaSatuan.toLocaleString() : "0"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center p-2">Data tidak tersedia</td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
