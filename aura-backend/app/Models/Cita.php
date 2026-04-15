<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'servicio_id', 'fecha', 'hora', 'estado', 'notas'];

    // Relación: Una cita pertenece a un usuario
    public function usuario() {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Relación: Una cita pertenece a un servicio
    public function servicio() {
        return $this->belongsTo(Servicio::class, 'servicio_id');
    }
}