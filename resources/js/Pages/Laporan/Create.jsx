import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function CreateLaporan() {
    const { data, setData, post, processing, errors } = useForm({
        TipeLaporan: '',
        TanggalAwal: '',
        TanggalAkhir: '',
        TotalTransaksi: '',
        TotalPendapatan: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('laporan.store'), {
            onSuccess: () => window.location.href = route('laporan.index')
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Laporan" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative flex items-center justify-center mb-6">
                        <Link 
                            href={route('laporan.index')}
                            className="absolute left-0 p-2 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition"
                        >
                            <ArrowLeft size={22} className="text-black" />
                        </Link>
                        <h2 className="text-2xl font-semibold text-gray-800">Tambah Laporan</h2>
                    </div>

                    <form onSubmit={submit}>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Tipe Laporan</label>
                                <input
                                    type="text"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.TipeLaporan}
                                    onChange={e => setData('TipeLaporan', e.target.value)}
                                />
                                {errors.TipeLaporan && <div className="text-red-500 text-sm mt-2">{errors.TipeLaporan}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Tanggal Awal</label>
                                <input
                                    type="date"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.TanggalAwal}
                                    onChange={e => setData('TanggalAwal', e.target.value)}
                                />
                                {errors.TanggalAwal && <div className="text-red-500 text-sm mt-2">{errors.TanggalAwal}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Tanggal Akhir</label>
                                <input
                                    type="date"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.TanggalAkhir}
                                    onChange={e => setData('TanggalAkhir', e.target.value)}
                                />
                                {errors.TanggalAkhir && <div className="text-red-500 text-sm mt-2">{errors.TanggalAkhir}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Total Transaksi</label>
                                <input
                                    type="number"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.TotalTransaksi}
                                    onChange={e => setData('TotalTransaksi', e.target.value)}
                                />
                                {errors.TotalTransaksi && <div className="text-red-500 text-sm mt-2">{errors.TotalTransaksi}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Total Pendapatan</label>
                                <input
                                    type="number"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.TotalPendapatan}
                                    onChange={e => setData('TotalPendapatan', e.target.value)}
                                />
                                {errors.TotalPendapatan && <div className="text-red-500 text-sm mt-2">{errors.TotalPendapatan}</div>}
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
