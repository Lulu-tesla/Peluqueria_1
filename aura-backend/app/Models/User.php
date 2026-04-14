<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // ✅ Necesario para generar tokens

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Atributos que se pueden llenar masivamente.
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
     * Atributos que se ocultan en las respuestas JSON (Seguridad).
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Conversión de tipos de datos automáticos.
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed', // Asegura que la contraseña siempre se maneje como hash
        ];
    }
}