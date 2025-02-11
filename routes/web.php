<?php

use App\Http\Controllers\LaporanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BarangController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Use App\Models\Barang;

Route::get('/dashboard', function () {
    $barangs = Barang::orderBy('created_at', 'desc')->get();
    return Inertia::render('Dashboard', ['barangs' => $barangs]);
})->name('dashboard')->middleware(['auth']);

// Rute Welcome Page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Middleware untuk rute yang membutuhkan autentikasi
Route::middleware('auth')->group(function () {
    
    // Rute Profil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Rute Manajemen User
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/create',[UserController::class,'create'])->name('users.create');
    Route::post('/users/store',[UserController::class,'store'])->name('users.store');
    Route::get('/users/edit/{id}',[UserController::class,'edit'])->name('users.edit');
    Route::put('/users/update/{id}',[UserController::class,'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users/store', [UserController::class, 'store'])->name('users.store');

    // Rute CRUD Barang
    Route::get('/barang', [BarangController::class, 'index'])->name('barang.index'); // Menampilkan daftar barang
    Route::get('/barang/create', [BarangController::class, 'create'])->name('barang.create'); // Form tambah barang
    Route::post('/barang', [BarangController::class, 'store'])->name('barang.store'); // Simpan barang baru
    Route::get('/barang/{id}/edit', [BarangController::class, 'edit'])->name('barang.edit'); // Form edit barang
    Route::put('/barang/{id}', [BarangController::class, 'update'])->name('barang.update'); // Update barang
    Route::delete('/barang/{id}', [BarangController::class, 'destroy'])->name('barang.destroy'); // Hapus barang

    Route::resource('laporan', LaporanController::class);
    // Logout
    
    Route::post('/logout', function () {
        auth()->logout();
        return redirect('/');
    })->name('logout');
});

require __DIR__.'/auth.php';
