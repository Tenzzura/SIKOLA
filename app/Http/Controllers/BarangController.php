<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    return Inertia::render('Barang/Index');

    }
    /*a
    a
    a
    a
    /**
     * Show the form for creating a new resource.
     
    public function create()
    {
        return Inertia::render('Barang/Create');
    }

    /**
     * Store a newly created resource in storage.
     
    public function store(Request $request)
    {
        $request->validate([
            'NamaBarang' => 'required|string|max:100',
            'StokBarang' => 'required|integer|min:0',
            'HargaSatuan' => 'required|numeric|min:0',
            'KategoriBarang' => 'required|string|max:50',
            'TanggalDatang' => 'required|date',
        ]);

        Barang::create($request->all());

        return redirect()->route('barang.index')->with('success', 'Barang added successfully.');
    }

    /**
     * Display the specified resource.
     
    public function show($id)
    {
        $barang = Barang::findOrFail($id);
        return Inertia::render('Barang/Show', ['barang' => $barang]);
    }

    /**
     * Show the form for editing the specified resource.
     
    public function edit($id)
    {
        $barang = Barang::findOrFail($id);
        return Inertia::render('Barang/Edit', ['barang' => $barang]);
    }

    /**
     * Update the specified resource in storage.
     
    public function update(Request $request, $id)
    {
        $request->validate([
            'NamaBarang' => 'required|string|max:100',
            'StokBarang' => 'required|integer|min:0',
            'HargaSatuan' => 'required|numeric|min:0',
            'KategoriBarang' => 'required|string|max:50',
            'TanggalDatang' => 'required|date',
        ]);

        $barang = Barang::findOrFail($id);
        $barang->update($request->all());

        return redirect()->route('barang.index')->with('success', 'Barang updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     
    public function destroy($id)
    {
        $barang = Barang::findOrFail($id);
        $barang->delete();

        return redirect()->route('barang.index')->with('success', 'Barang deleted successfully.');
    }*/
}
