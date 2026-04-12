import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

interface Miembro {
  nombre: string;
  rol: string;
  especialidad: string;
  avatar: string;
}

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, RouterModule],
  templateUrl: './nosotros-page.html',
  styleUrl: './nosotros-page.css'
})
export class NosotrosPage {

  equipo: Miembro[] = [
    {
      nombre: 'Valeria Montoya',
      rol: 'Fundadora & Directora',
      especialidad: 'Colorimetría avanzada',
      avatar: 'V'
    },
    {
      nombre: 'Camila Ríos',
      rol: 'Estilista Senior',
      especialidad: 'Cortes y tendencias',
      avatar: 'C'
    },
    {
      nombre: 'Daniela Vega',
      rol: 'Especialista en tratamientos',
      especialidad: 'Keratina & Botox capilar',
      avatar: 'D'
    },
    {
      nombre: 'Sofía Herrera',
      rol: 'Peinadora artística',
      especialidad: 'Novias & eventos',
      avatar: 'S'
    }
  ];

  valores = [
    {
      icono: '✨',
      titulo: 'Excelencia',
      descripcion: 'Cada detalle importa. Trabajamos con los mejores productos y técnicas del mercado.'
    },
    {
      icono: '💛',
      titulo: 'Calidez',
      descripcion: 'Creamos un espacio donde cada clienta se siente bienvenida, escuchada y valorada.'
    },
    {
      icono: '🎨',
      titulo: 'Creatividad',
      descripcion: 'Nos apasiona reinventarnos. Cada estilo es una obra de arte única y personal.'
    },
    {
      icono: '🌿',
      titulo: 'Compromiso',
      descripcion: 'Usamos productos sustentables y cuidamos tanto tu cabello como el planeta.'
    }
  ];
}