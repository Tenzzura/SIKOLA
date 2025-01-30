import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            
        >
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            User
                        </div>
                    </div>
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
        </AuthenticatedLayout>
    );
}
