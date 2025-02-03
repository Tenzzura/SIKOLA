<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $table = 'barang'; // Pastikan sesuai dengan nama tabel di database

    protected $fillable = [
        'id',       // ID Barang (Primary Key)
        'NamaBarang',     // Nama Barang
        'StokBarang',     // Stok Barang
        'HargaSatuan',    // Harga per satuan
        'KategoriBarang', // Kategori barang
        'TanggalDatang',  // Tanggal barang datang
    ];

    protected $primaryKey = 'id'; // Jika primary key bukan 'id', atur di sini

    public $timestamps = true; // Jika ingin otomatis menambahkan created_at & updated_at
}
