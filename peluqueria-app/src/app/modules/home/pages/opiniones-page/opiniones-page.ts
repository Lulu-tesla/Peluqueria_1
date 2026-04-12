import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

interface Opinion {
  id: number;
  nombre: string;
  avatar: string;
  estrellas: number;
  comentario: string;
  servicio: string;
  fecha: string;
}

@Component({
  selector: 'app-opiniones-page',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, RouterModule],
  templateUrl: './opiniones-page.html',
  styleUrl: './opiniones-page.css'
})
export class OpinionesPage {

  opiniones: Opinion[] = [
    {
      id: 1,
      nombre: 'Valentina R.',
      avatar: 'V',
      estrellas: 5,
      comentario: 'El balayage quedó increíble, exactamente lo que quería. El ambiente es hermoso y el equipo muy profesional.',
      servicio: 'Balayage',
      fecha: 'Marzo 2025'
    },
    {
      id: 2,
      nombre: 'Camila T.',
      avatar: 'C',
      estrellas: 5,
      comentario: 'Me hice la keratina y el resultado superó mis expectativas. Mi cabello nunca estuvo tan suave y brillante.',
      servicio: 'Keratina',
      fecha: 'Febrero 2025'
    },
    {
      id: 3,
      nombre: 'Lucía M.',
      avatar: 'L',
      estrellas: 5,
      comentario: 'El recogido para mi boda fue perfecto. Duró toda la noche y recibí mil cumplidos. ¡Gracias Aura Studio!',
      servicio: 'Recogido elegante',
      fecha: 'Enero 2025'
    },
    {
      id: 4,
      nombre: 'Sofía P.',
      avatar: 'S',
      estrellas: 4,
      comentario: 'Muy buena atención y el corte quedó justo como lo pedí. Lo recomiendo sin dudarlo.',
      servicio: 'Corte + peinado',
      fecha: 'Marzo 2025'
    },
    {
      id: 5,
      nombre: 'Andrea G.',
      avatar: 'A',
      estrellas: 5,
      comentario: 'La hidratación profunda transformó mi cabello. Noté la diferencia desde el primer lavado.',
      servicio: 'Hidratación profunda',
      fecha: 'Abril 2025'
    },
    {
      id: 6,
      nombre: 'Daniela F.',
      avatar: 'D',
      estrellas: 5,
      comentario: 'Las mechas californianas quedaron naturales y preciosas. Me encanta cómo entienden lo que uno quiere.',
      servicio: 'Mechas californianas',
      fecha: 'Febrero 2025'
    }
  ];

  get promedioEstrellas(): number {
    const total = this.opiniones.reduce((acc, o) => acc + o.estrellas, 0);
    return Math.round((total / this.opiniones.length) * 10) / 10;
  }

  getEstrellas(n: number): number[] {
    return Array(n).fill(0);
  }

  getEstrellasVacias(n: number): number[] {
    return Array(5 - n).fill(0);
  }
}