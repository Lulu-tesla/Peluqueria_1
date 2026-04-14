<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cita;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    // Para ver todas las citas en Postman
    public function index()
    {
        // Usamos 'with' para que nos diga también el nombre del usuario y del servicio
        return response()->json(Cita::with(['usuario', 'servicio'])->get());
    }

    // Para que el Socio A guarde una cita desde Angular
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'servicio_id' => 'required|exists:servicios,id',
            'fecha' => 'required|date',
            'hora' => 'required',
        ]);

        $cita = Cita::create($request->all());

        return response()->json([
            'message' => '¡Cita agendada con éxito!',
            'cita' => $cita
        ], 210);
    }
}