<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('barangs', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->string('NamaBarang');
            $table->integer('StokBarang');
            $table->decimal('HargaSatuan', 10, 2);
            $table->string('KategoriBarang');
            $table->date('TanggalDatang');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('barangs');
    }
};