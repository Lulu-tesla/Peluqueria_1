<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Registra un nuevo cliente en la base de datos.
     */
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

        // 2. Crear el usuario en la base de datos (Rol cliente por defecto)
        $user = User::create([
            'nombre'   => $request->nombre,
            'apellido' => $request->apellido,
            'email'    => $request->email,
            'telefono' => $request->telefono,
            'password' => Hash::make($request->password), // Encriptación segura
            'rol'      => 'cliente', 
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Usuario registrado correctamente',
            'user'    => $user
        ], 201);
    }

    /**
     * Valida credenciales y entrega un Token de acceso (Sanctum).
     */
    public function login(Request $request)
    {
        // 1. Validar entrada
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        // 2. Buscar usuario
        $user = User::where('email', $request->email)->first();

        // 3. Verificar existencia y contraseña
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Las credenciales proporcionadas son incorrectas.'
            ], 401);
        }

        // 4. Generar Token de acceso para Angular
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status'       => 'success',
            'access_token' => $token,
            'token_type'   => 'Bearer',
            'user'         => $user
        ]);
    }

    /**
     * Cierra la sesión eliminando el token actual.
     */
    public function logout(Request $request)
    {
        // El usuario debe estar autenticado para borrar su token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Sesión cerrada correctamente'
        ]);
    }
}