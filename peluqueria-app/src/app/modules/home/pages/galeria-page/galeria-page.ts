import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';

interface FotoGaleria {
  id: number;
  url: string;
  categoria: string;
  titulo: string;
}

@Component({
  selector: 'app-galeria-page',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './galeria-page.html',
  styleUrl: './galeria-page.css'
})
export class GaleriaPage {

  categoriaActiva = 'todos';

  categorias = ['todos', 'cortes', 'famosos'];

  fotos: FotoGaleria[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
    categoria: 'famosos',
    titulo: 'Maluma - Fade moderno'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600',
    categoria: 'famosos',
    titulo: 'Maluma - Undercut'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600',
    categoria: 'famosos',
    titulo: 'Farruko - Degradado'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600',
    categoria: 'famosos',
    titulo: 'Westcol - Corte urbano'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600',
    categoria: 'famosos',
    titulo: 'Max Valenzuela - Estilo juvenil'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1622287162716-1c5a1b2b9c9c?w=600',
    categoria: 'cortes',
    titulo: 'Low fade'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600',
    categoria: 'cortes',
    titulo: 'Mid fade texturizado'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=600',
    categoria: 'cortes',
    titulo: 'Crop moderno'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1520975922284-9e0b2d5b7d43?w=600',
    categoria: 'famosos',
    titulo: 'Estilo reggaetonero'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
    categoria: 'cortes',
    titulo: 'Undercut clásico'
  }
];

  get fotosFiltradas(): FotoGaleria[] {
    if (this.categoriaActiva === 'todos') return this.fotos;
    return this.fotos.filter(f => f.categoria === this.categoriaActiva);
  }

  setCategoria(cat: string) {
    this.categoriaActiva = cat;
  }

  fotoAmpliada: FotoGaleria | null = null;

  abrirFoto(foto: FotoGaleria) {
    this.fotoAmpliada = foto;
  }

  cerrarFoto() {
    this.fotoAmpliada = null;
  }
}