<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Tabla de Usuarios (Actualizada para tu Registro de Angular)
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nombre'); // Lo que tenías como 'name'
            $table->string('apellido'); // Nuevo
            $table->string('email')->unique();
            $table->string('telefono')->nullable(); // Nuevo
            $table->string('password');
            // Agregamos el rol para tus Guards de Angular
            $table->enum('rol', ['cliente', 'admin'])->default('cliente'); 
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // 2. Tabla para recuperar contraseñas (La dejamos por si la usas luego)
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // 3. Tabla de Sesiones (La mantenemos por estándar de Laravel)
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};