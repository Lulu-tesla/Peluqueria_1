<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // ✅ Importante para seguridad con Angular

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Atributos que se pueden llenar (Mass assignment)
     * Deben coincidir con los nombres que envías desde Angular.
     */
    protected $fillable = [
        'nombre',
        'apellido',
        'email',
        'telefono',
        'password',
        'rol',
    ];

    /**
     * Atributos que nunca se enviarán en una respuesta JSON (Seguridad)
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Casting de tipos de datos
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed', // Laravel encripta automáticamente al guardar
        ];
    }
}