<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController; 
use App\Http\Controllers\Api\ServicioController;
use App\Http\Controllers\Api\CitaController; 

// Rutas públicas
Route::post('/registrar', [AuthController::class, 'registrar']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/servicios', [ServicioController::class, 'index']);
Route::get('/citas', [CitaController::class, 'index']);
Route::post('/citas', [CitaController::class, 'store']);

// Rutas protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // 🚀 NUEVA RUTA: PATCH para actualizar el estado
    Route::patch('/citas/{id}/estado', [CitaController::class, 'actualizarEstado']);
});