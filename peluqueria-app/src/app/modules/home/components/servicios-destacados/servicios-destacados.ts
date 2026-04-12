import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServicioDestacado {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
}

@Component({
  selector: 'app-servicios-destacados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios-destacados.html',
  styleUrl: './servicios-destacados.css'
})
export class ServiciosDestacados {
  servicios: ServicioDestacado[] = [
    {
      nombre: 'Cortes',
      descripcion: 'Estilos modernos y clásicos adaptados a tu personalidad.',
      imagen: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      precio: 'Desde Bs. 80'
    },
    {
      nombre: 'Color',
      descripcion: 'Balayage, mechas y tintes con técnicas de vanguardia.',
      imagen: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
      precio: 'Desde Bs. 180'
    },
    {
      nombre: 'Tratamientos',
      descripcion: 'Keratina, botox capilar e hidratación profunda.',
      imagen: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600',
      precio: 'Desde Bs. 150'
    },
    {
      nombre: 'Peinados',
      descripcion: 'Recogidos, ondas y trenzas para cualquier ocasión.',
      imagen: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600',
      precio: 'Desde Bs. 120'
    }
  ];
}