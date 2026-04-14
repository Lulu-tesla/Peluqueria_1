<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function registrar(Request $request)
    {
        // 1. Validar los datos que vienen de Angular
        $validador = Validator::make($request->all(), [
            'nombre'   => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validador->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validador->errors()
            ], 400);
        }

        // 2. Crear el usuario en la base de datos
        $user = User::create([
            'nombre'   => $request->nombre,
            'apellido' => $request->apellido,
            'email'    => $request->email,
            'telefono' => $request->telefono,
            'password' => Hash::make($request->password), // Encriptación
            'rol'      => 'cliente', // Por defecto todos son clientes
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Usuario registrado correctamente',
            'user'    => $user
        ], 201);
    }
}