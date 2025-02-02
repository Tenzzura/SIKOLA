<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BarangController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rute Dashboard (Menampilkan Barang)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'barang' => \App\Models\Barang::paginate(10) // Ambil data barang dengan pagination
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

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

    // Logout
    Route::post('/logout', function () {
        auth()->logout();
        return redirect('/');
    })->name('logout');
});

require __DIR__.'/auth.php';
