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
        $barang = Barang::paginate(10);
        return Inertia::render('Barang/Index', ['barang' => $barang]);
    }

    // Menampilkan form tambah barang
    public function create()
    {
        return Inertia::render('Barang/Create');
    }

    // Menyimpan barang baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'NamaBarang' => 'required|string|max:255',
            'StokBarang' => 'required|integer|min:0',
            'HargaSatuan' => 'required|numeric|min:0',
            'KategoriBarang' => 'required|string|max:255',
            'TanggalDatang' => 'required|date',
        ]);

        Barang::create($validated);

        return redirect()->route('barang.index')->with('success', 'Barang berhasil ditambahkan.');
    }

    // Menampilkan form edit barang
    // Menampilkan form edit barang
public function edit($id)
{
    $barang = Barang::findOrFail($id); // Ganti BarangID dengan id
    return Inertia::render('Barang/Edit', ['barang' => $barang]);
}

// Mengupdate barang
public function update(Request $request, $id)
{
    $validated = $request->validate([
        'NamaBarang' => 'required|string|max:255',
        'StokBarang' => 'required|integer|min:0',
        'HargaSatuan' => 'required|numeric|min:0',
        'KategoriBarang' => 'required|string|max:255',
        'TanggalDatang' => 'required|date',
    ]);

    $barang = Barang::findOrFail($id); // Ganti BarangID dengan id
    $barang->update($validated);

    return redirect()->route('barang.index')->with('success', 'Barang berhasil diperbarui.');
}


    // Menghapus barang
    public function destroy($id)
    {
        $barang = Barang::findOrFail($id);
        $barang->delete();

        return redirect()->route('barang.index')->with('success', 'Barang berhasil dihapus.');
    }
}
