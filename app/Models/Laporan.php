<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    use HasFactory;

    protected $table = 'laporan';
    protected $primaryKey = 'LaporanID';

    protected $fillable = [
        'TipeLaporan',
        'TanggalAwal',
        'TanggalAkhir',
        'TotalTransaksi',
        'TotalPendapatan'
    ];

    public $timestamps = true;
}
