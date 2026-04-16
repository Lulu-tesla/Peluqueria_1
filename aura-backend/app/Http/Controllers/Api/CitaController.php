<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cita;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    public function index(Request $request)
    {
        $query = Cita::with(['usuario', 'servicio']);

        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        return response()->json($query->orderBy('fecha', 'desc')->get());
    }

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

    // 🚀 NUEVA FUNCIÓN: Actualiza solo el estado de la cita
    public function actualizarEstado(Request $request, $id)
    {
        $request->validate([
            'estado' => 'required|in:pendiente,confirmada,completada'
        ]);

        $cita = Cita::findOrFail($id);
        $cita->update(['estado' => $request->estado]);

        return response()->json([
            'status' => 'success',
            'message' => 'Estado actualizado correctamente',
            'cita' => $cita
        ]);
    }
}