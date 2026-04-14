<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up(): void
{
    Schema::create('citas', function (Blueprint $table) {
        $table->id();
        // Conexión con el usuario que reserva
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        // Conexión con el servicio que eligió
        $table->foreignId('servicio_id')->constrained()->onDelete('cascade');
        
        $table->date('fecha');
        $table->time('hora');
        $table->enum('estado', ['pendiente', 'confirmada', 'cancelada', 'completada'])->default('pendiente');
        $table->text('notas')->nullable(); // Por si el cliente quiere decir algo extra
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('citas');
    }
};
