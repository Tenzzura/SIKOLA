<?php

namespace App\Http\Controllers;

use App\Models\Barang; // Pastikan ini ada tanpa karakter tak terlihat
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    public function index()
    {
        $barang = Barang::paginate(10); // Ambil data barang
        return Inertia::render('Barang/Index', ['barangs' => $barang]);
    }
}
