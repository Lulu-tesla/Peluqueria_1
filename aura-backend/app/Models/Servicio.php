<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    use HasFactory;

    // Campos que permitimos llenar (deben coincidir con tu migración)
    protected $fillable = [
        'nombre', 
        'descripcion', 
        'precio', 
        'duracion', 
        'icono', 
        'categoria'
    ];
}