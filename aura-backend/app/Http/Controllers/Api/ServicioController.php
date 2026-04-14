<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Servicio; // Importamos el modelo
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    public function index()
    {
        // Obtenemos los servicios de la DB
        $servicios = Servicio::all();
        
        // Retornamos el JSON para el Front
        return response()->json($servicios);
    }
}