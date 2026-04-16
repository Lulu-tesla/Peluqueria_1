<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cita;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    // Para ver todas las citas o filtrar por usuario específico
    public function index(Request $request)
    {
        // Preparamos la consulta incluyendo las relaciones
        $query = Cita::with(['usuario', 'servicio']);

        // Si Angular envía el ID del usuario, filtramos la lista
        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        // Devolvemos los datos ordenados de la cita más reciente a la más antigua
        return response()->json($query->orderBy('fecha', 'desc')->get());
    }

    // Para que Angular guarde una cita (Mantenemos tu código exacto)
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