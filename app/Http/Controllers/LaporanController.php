<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanController extends Controller
{
    // Menampilkan daftar laporan
    public function index()
    {
        $laporan = Laporan::paginate(10);
        return Inertia::render('Laporan/Index', ['laporan' => $laporan]);
    }

    // Menampilkan form tambah laporan
    public function create()
    {
        return Inertia::render('Laporan/Create');
    }

    // Menyimpan laporan baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'TipeLaporan' => 'required|in:Harian,Mingguan,Setengah Tahun',
            'TanggalAwal' => 'required|date',
            'TanggalAkhir' => 'required|date|after_or_equal:TanggalAwal',
            'TotalTransaksi' => 'required|integer|min:0',
            'TotalPendapatan' => 'required|numeric|min:0',
        ]);

        Laporan::create($validated);

        return redirect()->route('laporan.index')->with('success', 'Laporan berhasil ditambahkan.');
    }

    // Menampilkan form edit laporan
    public function edit($id)
    {
        $laporan = Laporan::findOrFail($id);
        return Inertia::render('Laporan/Edit', ['laporan' => $laporan]);
    }

    // Mengupdate laporan
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'TipeLaporan' => 'required|in:Harian,Mingguan,Setengah Tahun',
            'TanggalAwal' => 'required|date',
            'TanggalAkhir' => 'required|date|after_or_equal:TanggalAwal',
            'TotalTransaksi' => 'required|integer|min:0',
            'TotalPendapatan' => 'required|numeric|min:0',
        ]);

        $laporan = Laporan::findOrFail($id);
        $laporan->update($validated);

        return redirect()->route('laporan.index')->with('success', 'Laporan berhasil diperbarui.');
    }

    // Menghapus laporan
    public function destroy($id)
    {
        $laporan = Laporan::findOrFail($id);
        $laporan->delete();

        return redirect()->route('laporan.index')->with('success', 'Laporan berhasil dihapus.');
    }
}
