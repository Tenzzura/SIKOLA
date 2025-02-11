import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function LaporanEdit() {
    const { laporan } = usePage().props;

    // Gunakan useForm untuk menangani form state
    const { data, setData, put, processing, errors, reset } = useForm({
        LaporanID: laporan.LaporanID,
        TipeLaporan: laporan.TipeLaporan,
        TanggalAwal: laporan.TanggalAwal,
        TanggalAkhir: laporan.TanggalAkhir,
        TotalTransaksi: laporan.TotalTransaksi,
        TotalPendapatan: laporan.TotalPendapatan,
    });

    useEffect(() => {
        if (laporan) {
            setData({
                LaporanID: laporan.LaporanID,
                TipeLaporan: laporan.TipeLaporan,
                TanggalAwal: laporan.TanggalAwal,
                TanggalAkhir: laporan.TanggalAkhir,
                TotalTransaksi: laporan.TotalTransaksi,
                TotalPendapatan: laporan.TotalPendapatan,
            });
        }
    }, [laporan]);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('laporan.update', data.LaporanID), {
            onSuccess: () => {
                alert('Data laporan berhasil diperbarui');
            },
            onError: () => {
                alert('Ada kesalahan saat memperbarui data laporan');
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Laporan" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Laporan</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tipe Laporan</label>
                        <input
                            type="text"
                            value={data.TipeLaporan}
                            onChange={(e) => setData('TipeLaporan', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.TipeLaporan && <p className="text-red-500 text-sm mt-1">{errors.TipeLaporan}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tanggal Awal</label>
                        <input
                            type="date"
                            value={data.TanggalAwal}
                            onChange={(e) => setData('TanggalAwal', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.TanggalAwal && <p className="text-red-500 text-sm mt-1">{errors.TanggalAwal}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tanggal Akhir</label>
                        <input
                            type="date"
                            value={data.TanggalAkhir}
                            onChange={(e) => setData('TanggalAkhir', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.TanggalAkhir && <p className="text-red-500 text-sm mt-1">{errors.TanggalAkhir}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Total Transaksi</label>
                        <input
                            type="number"
                            value={data.TotalTransaksi}
                            onChange={(e) => setData('TotalTransaksi', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.TotalTransaksi && <p className="text-red-500 text-sm mt-1">{errors.TotalTransaksi}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Total Pendapatan</label>
                        <input
                            type="number"
                            value={data.TotalPendapatan}
                            onChange={(e) => setData('TotalPendapatan', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.TotalPendapatan && <p className="text-red-500 text-sm mt-1">{errors.TotalPendapatan}</p>}
                    </div>

                    <div className="mb-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                        >
                            {processing ? 'Menyimpan...' : 'Simpan'}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
