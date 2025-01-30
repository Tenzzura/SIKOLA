import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Bell, Mail, Settings, Search } from 'lucide-react';

export default function Dashboard() {
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
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">1</span>
                    </div>
                    <div className="relative">
                        <Bell className="text-gray-500" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">2</span>
                    </div>
                    <Settings className="text-gray-500" />
                    <div className="flex items-center space-x-2">
                        <img 
                            src="/profile.jpg" 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full border"
                        />
                        <div>
                            <p className="font-semibold">John Smilga</p>
                            <p className="text-gray-500 text-sm">Super Admin</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Total Purchase Due</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Total Sales Due</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Total Sale Amount</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <p className="text-lg font-semibold">Rp.0</p>
                        <p className="text-gray-500">Total Expense Amount</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-orange-400 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Customers</p>
                    </div>
                    <div className="bg-blue-400 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Suppliers</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Purchase Invoice</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 shadow-md rounded-lg flex items-center justify-between">
                        <p className="text-xl font-bold">0</p>
                        <p>Sales Invoice</p>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Recently Added Products</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">No</th>
                                <th className="p-2">Products</th>
                                <th className="p-2">Price</th>
                            </tr>
                        </thead>
                        

                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
