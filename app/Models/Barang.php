<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $table = 'barang'; // Define table name explicitly (optional)

    protected $primaryKey = 'BarangID'; // Set the primary key

    public $timestamps = false; // Disable timestamps if not needed

    protected $fillable = [
        'NamaBarang',
        'StokBarang',
        'HargaSatuan',
        'KategoriBarang',
        'TanggalDatang',
    ];
}
