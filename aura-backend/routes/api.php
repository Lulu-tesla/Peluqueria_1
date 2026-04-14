<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController; // ✅ Importamos tu nuevo controlador

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// RUTA DE REGISTRO: Accesible para cualquier cliente nuevo
Route::post('/registrar', [AuthController::class, 'registrar']);

// RUTA DE LOGIN (La crearemos en el siguiente paso)
// Route::post('/login', [AuthController::class, 'login']);

// RUTA PROTEGIDA: Solo devuelve datos si el usuario tiene un Token válido
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');