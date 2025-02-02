<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('role')->paginate(10); // Load relasi role jika diperlukan, tapi di sini langsung pakai role dari user
        return Inertia::render('User/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = ['admin', 'petugas', 'user']; // Daftar role sesuai enum
        return Inertia::render('User/Create', [
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|min:5|unique:users,name',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:5',
        'role' => 'required|in:admin,petugas,user',
    ]);

    try {
        // Buat User
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Simpan Role di Tabel Roles
        if ($user) {
            Role::create([
                'user_id' => $user->id,
                'role' => $validated['role'],
            ]);
        }

        return redirect()->route('users.index')->with('success', 'User berhasil ditambahkan.');
    } catch (\Exception $e) {
        Log::error('Error menyimpan user: ' . $e->getMessage());
        return redirect()->back()->withInput()->with('error', 'Data gagal disimpan: ' . $e->getMessage());
    }
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id); // Ambil user berdasarkan ID
        $roles = ['admin', 'petugas', 'user']; // Daftar role sesuai enum

        return Inertia::render('User/Edit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|min:5|unique:users,name,' . $id,
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'nullable|min:5',
            'role' => 'required|in:admin,petugas,user', // Validasi role menggunakan enum
        ]);

        try {
            $user = User::findOrFail($id);
            $user->update([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => $request->filled('password') ? Hash::make($request->password) : $user->password,
                'role' => $validated['role'], // Update role langsung di users
            ]);

            return redirect()->route('users.index')->with('success', 'User berhasil diperbarui.');
        } catch (\Exception $e) {
            Log::error('Error memperbarui user: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Data gagal diperbarui: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            return redirect()->route('users.index')->with('success', 'User berhasil dihapus.');
        } catch (\Exception $e) {
            Log::error('Error menghapus user: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Data gagal dihapus: ' . $e->getMessage());
        }
    }
}
