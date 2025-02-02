import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Home, Menu, Users, Package } from "lucide-react"; // Import icons

export default function Sidebar({ children }) {
    const user = usePage().props.auth.user;
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Sidebar Menu Items
    const menuItems = [
        { name: "Dashboard", href: route("dashboard"), icon: <Home size={20} className="text-black" /> },
        { name: "Users", href: route("users.index"), icon: <Users size={20} className="text-black" /> },
        { name: "Barang", href: route("barang.index"), icon: <Package size={20} className="text-black" /> },
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`h-screen bg-white border-r transition-all ${isCollapsed ? "w-16" : "w-64"}`}>
                {/* Sidebar Header */}
                <div className={`flex items-center p-3 border-b transition-all ${isCollapsed ? "justify-center" : "justify-between"}`}>
                    {/* Logo & Teks hanya tampil saat sidebar penuh */}
                    {!isCollapsed && (
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="https://i.ibb.co.com/M9qz1TJ/Logo-Sikola-1-removebg-preview.png"
                                alt="Logo"
                                className="h-11 w-auto"
                            />
                            <div>
                                <span className="text-lg font-semibold text-black">SIKOLA</span>
                                <p className="text-xs text-black">Sistem Operasi Sekolah</p>
                            </div>
                        </Link>
                    )}

                    {/* Tombol Menu */}
                    <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 text-black">
                        <Menu size={24} />
                    </button>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center p-3 text-black hover:bg-gray-100 rounded-lg transition-all ${
                                isCollapsed ? "justify-center mx-auto w-full" : "gap-3 mx-2"
                            }`}
                        >
                            {item.icon}
                            {!isCollapsed && <span className="text-base text-black">{item.name}</span>}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
}
