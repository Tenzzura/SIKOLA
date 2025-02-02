import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function CreateBarang() {
    const { data, setData, post, processing, errors } = useForm({
        NamaBarang: '',
        StokBarang: '',
        HargaSatuan: '',
        KategoriBarang: '',
        TanggalDatang: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('barang.store'), {
            onSuccess: () => window.location.href = route('barang.index')
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Barang" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative flex items-center justify-center mb-6">
                        <Link 
                            href={route('barang.index')}
                            className="absolute left-0 p-2 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition"
                        >
                            <ArrowLeft size={22} className="text-black" />
                        </Link>
                        <h2 className="text-2xl font-semibold text-gray-800">Tambah Barang</h2>
                    </div>

                    <form onSubmit={submit}>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Nama Barang</label>
                                <input
                                    type="text"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.NamaBarang}
                                    onChange={e => setData('NamaBarang', e.target.value)}
                                />
                                {errors.NamaBarang && <div className="text-red-500 text-sm mt-2">{errors.NamaBarang}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Stok</label>
                                <input
                                    type="number"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.StokBarang}
                                    onChange={e => setData('StokBarang', e.target.value)}
                                />
                                {errors.StokBarang && <div className="text-red-500 text-sm mt-2">{errors.StokBarang}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Harga Satuan</label>
                                <input
                                    type="number"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.HargaSatuan}
                                    onChange={e => setData('HargaSatuan', e.target.value)}
                                />
                                {errors.HargaSatuan && <div className="text-red-500 text-sm mt-2">{errors.HargaSatuan}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Kategori</label>
                                <input
                                    type="text"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.KategoriBarang}
                                    onChange={e => setData('KategoriBarang', e.target.value)}
                                />
                                {errors.KategoriBarang && <div className="text-red-500 text-sm mt-2">{errors.KategoriBarang}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Tanggal Datang</label>
                                <input
                                    type="date"
                                    className="mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.TanggalDatang}
                                    onChange={e => setData('TanggalDatang', e.target.value)}
                                />
                                {errors.TanggalDatang && <div className="text-red-500 text-sm mt-2">{errors.TanggalDatang}</div>}
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
