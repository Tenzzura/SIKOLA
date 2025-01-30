<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $table = 'barang';
    protected $primaryKey = 'BarangID';
    public $timestamps = true;

    protected $fillable = [
        'NamaBarang',
        'StokBarang',
        'HargaSatuan',
        'KategoriBarang',
        'TanggalDatang',
    ];
}