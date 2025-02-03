import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function BarangEdit() {
    const { barang } = usePage().props;

    // Gunakan useForm untuk menangani form state
    const { data, setData, put, processing, errors, reset } = useForm({
        id: barang.id,  // id sesuai dengan kolom id di database
        NamaBarang: barang.NamaBarang,
        StokBarang: barang.StokBarang,
        HargaSatuan: barang.HargaSatuan,
        KategoriBarang: barang.KategoriBarang,
        TanggalDatang: barang.TanggalDatang,
    });

    // Mengupdate data form setiap kali props barang berubah
    useEffect(() => {
        if (barang) {
            setData({
                id: barang.id,  // id sesuai dengan kolom id di database
                NamaBarang: barang.NamaBarang,
                StokBarang: barang.StokBarang,
                HargaSatuan: barang.HargaSatuan,
                KategoriBarang: barang.KategoriBarang,
                TanggalDatang: barang.TanggalDatang,
            });
        }
    }, [barang]);

    // Penanganan submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kirim permintaan PUT ke route barang.update
        put(route('barang.update', data.id), {
            onSuccess: () => {
                // Tampilkan notifikasi sukses atau arahkan pengguna ke halaman lain
                alert('Data barang berhasil diperbarui');
            },
            onError: (error) => {
                // Tampilkan pesan error jika terjadi kesalahan
                alert('Ada kesalahan saat memperbarui data barang');
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Barang" />

            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Barang</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="NamaBarang" className="block text-sm font-medium text-gray-700">Nama Barang</label>
                        <input
                            type="text"
                            id="NamaBarang"
                            value={data.NamaBarang}
                            onChange={(e) => setData('NamaBarang', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.NamaBarang && <p className="text-red-500 text-sm mt-1">{errors.NamaBarang}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="StokBarang" className="block text-sm font-medium text-gray-700">Stok Barang</label>
                        <input
                            type="number"
                            id="StokBarang"
                            value={data.StokBarang}
                            onChange={(e) => setData('StokBarang', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.StokBarang && <p className="text-red-500 text-sm mt-1">{errors.StokBarang}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="HargaSatuan" className="block text-sm font-medium text-gray-700">Harga Satuan</label>
                        <input
                            type="number"
                            id="HargaSatuan"
                            value={data.HargaSatuan}
                            onChange={(e) => setData('HargaSatuan', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.HargaSatuan && <p className="text-red-500 text-sm mt-1">{errors.HargaSatuan}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="KategoriBarang" className="block text-sm font-medium text-gray-700">Kategori Barang</label>
                        <input
                            type="text"
                            id="KategoriBarang"
                            value={data.KategoriBarang}
                            onChange={(e) => setData('KategoriBarang', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.KategoriBarang && <p className="text-red-500 text-sm mt-1">{errors.KategoriBarang}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="TanggalDatang" className="block text-sm font-medium text-gray-700">Tanggal Datang</label>
                        <input
                            type="date"
                            id="TanggalDatang"
                            value={data.TanggalDatang}
                            onChange={(e) => setData('TanggalDatang', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.TanggalDatang && <p className="text-red-500 text-sm mt-1">{errors.TanggalDatang}</p>}
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
