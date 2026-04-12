import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

interface Servicio {
  id: number;
  icono: string;
  nombre: string;
  descripcion: string;
  precio: string;
  duracion: string;
  categoria: string;
}

@Component({
  selector: 'app-servicios-page',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, RouterModule],
  templateUrl: './servicios-page.html',
  styleUrl: './servicios-page.css'
})
export class ServiciosPage {

  categoriaActiva = 'todos';
  categorias = ['todos', 'cortes', 'color', 'tratamientos', 'peinados'];

  servicios: Servicio[] = [
    {
      id: 1,
      icono: '✂️',
      nombre: 'Corte clásico',
      descripcion: 'Corte personalizado adaptado a tu rostro y estilo.',
      precio: 'Bs. 80',
      duracion: '45 min',
      categoria: 'cortes'
    },
    {
      id: 2,
      icono: '✂️',
      nombre: 'Corte + peinado',
      descripcion: 'Lavado, corte y peinado con productos premium.',
      precio: 'Bs. 120',
      duracion: '1h 15min',
      categoria: 'cortes'
    },
    {
      id: 3,
      icono: '✂️',
      nombre: 'Flequillo / retoques',
      descripcion: 'Retoque de puntas o flequillo para mantener tu look.',
      precio: 'Bs. 40',
      duracion: '20 min',
      categoria: 'cortes'
    },
    {
      id: 4,
      icono: '🎨',
      nombre: 'Balayage',
      descripcion: 'Coloración degradada para un acabado natural y luminoso.',
      precio: 'Bs. 350',
      duracion: '3h',
      categoria: 'color'
    },
    {
      id: 5,
      icono: '🎨',
      nombre: 'Mechas californianas',
      descripcion: 'Aclarado selectivo en puntas con efecto sol.',
      precio: 'Bs. 280',
      duracion: '2h 30min',
      categoria: 'color'
    },
    {
      id: 6,
      icono: '🎨',
      nombre: 'Tinte completo',
      descripcion: 'Color uniforme de raíz a puntas sin amoníaco.',
      precio: 'Bs. 180',
      duracion: '1h 30min',
      categoria: 'color'
    },
    {
      id: 7,
      icono: '💆',
      nombre: 'Keratina',
      descripcion: 'Alisado que elimina el frizz y aporta brillo intenso.',
      precio: 'Bs. 450',
      duracion: '3h 30min',
      categoria: 'tratamientos'
    },
    {
      id: 8,
      icono: '💆',
      nombre: 'Hidratación profunda',
      descripcion: 'Mascarilla nutritiva que restaura la fibra capilar.',
      precio: 'Bs. 150',
      duracion: '1h',
      categoria: 'tratamientos'
    },
    {
      id: 9,
      icono: '💆',
      nombre: 'Botox capilar',
      descripcion: 'Tratamiento intensivo que rellena y regenera el cabello.',
      precio: 'Bs. 320',
      duracion: '2h',
      categoria: 'tratamientos'
    },
    {
      id: 10,
      icono: '👑',
      nombre: 'Recogido elegante',
      descripcion: 'Peinado de fiesta o novia con acabado impecable.',
      precio: 'Bs. 200',
      duracion: '1h 30min',
      categoria: 'peinados'
    },
    {
      id: 11,
      icono: '👑',
      nombre: 'Ondas / rizos',
      descripcion: 'Definición de ondas naturales o rizos sin calor.',
      precio: 'Bs. 120',
      duracion: '1h',
      categoria: 'peinados'
    },
    {
      id: 12,
      icono: '👑',
      nombre: 'Trenzas artísticas',
      descripcion: 'Trenzas decorativas para cualquier ocasión.',
      precio: 'Bs. 160',
      duracion: '1h 15min',
      categoria: 'peinados'
    }
  ];

  get serviciosFiltrados(): Servicio[] {
    if (this.categoriaActiva === 'todos') return this.servicios;
    return this.servicios.filter(s => s.categoria === this.categoriaActiva);
  }

  setCategoria(cat: string): void {
    this.categoriaActiva = cat;
  }
}