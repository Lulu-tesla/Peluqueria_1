<?php

namespace Database\Seeders; // <-- Importante: Debe decir esto

use Illuminate\Database\Seeder;
use App\Models\Servicio;

class ServicioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $servicios = [
            ['nombre' => 'Corte de Autor', 'descripcion' => 'Diseño personalizado.', 'precio' => 150.00, 'duracion' => 60, 'icono' => 'scissors', 'categoria' => 'Cabello'],
            ['nombre' => 'Balayage Premium', 'descripcion' => 'Coloración natural.', 'precio' => 450.00, 'duracion' => 180, 'icono' => 'palette', 'categoria' => 'Color'],
            ['nombre' => 'Manicura Rusa', 'descripcion' => 'Limpieza y esmaltado.', 'precio' => 90.00, 'duracion' => 90, 'icono' => 'hand', 'categoria' => 'Uñas'],
            ['nombre' => 'Barba Ritual', 'descripcion' => 'Toalla caliente y aceite.', 'precio' => 80.00, 'duracion' => 30, 'icono' => 'razor', 'categoria' => 'Barbería'],
        ];

        foreach ($servicios as $s) {
            Servicio::create($s);
        }
    }
}