<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    // Menampilkan daftar barang
    public function index()
    {
        $barang = Barang::paginate(10); // Ambil data barang dengan pagination
        return Inertia::render('Barang/Index', ['barang' => $barang]);
    }

    // Menampilkan form tambah barang
    public function create()
    {
        return Inertia::render('Barang/Create'); // Pastikan ada file Vue di resources/js/Pages/Barang/Create.vue
    }

    // Menyimpan barang baru
    public function store(Request $request)
    {
        $request->validate([
            'NamaBarang' => 'required|string|max:255',
            'StokBarang' => 'required|integer|min:0',
            'HargaSatuan' => 'required|numeric|min:0',
            'KategoriBarang' => 'required|string|max:255',
            'TanggalDatang' => 'required|date',
        ]);

        Barang::create($request->all());

        return redirect()->route('barang.index')->with('success', 'Barang berhasil ditambahkan.');
    }
}
