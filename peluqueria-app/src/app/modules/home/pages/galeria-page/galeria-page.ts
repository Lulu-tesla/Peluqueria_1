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

  categorias = ['todos', 'cortes', 'color', 'peinados', 'tratamientos'];

  fotos: FotoGaleria[] = [
    { id: 1,  url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600', categoria: 'cortes',       titulo: 'Bob clásico' },
    { id: 2,  url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600', categoria: 'color',        titulo: 'Balayage dorado' },
    { id: 3,  url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600', categoria: 'peinados',     titulo: 'Ondas suaves' },
    { id: 4,  url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600', categoria: 'tratamientos', titulo: 'Hidratación profunda' },
    { id: 5,  url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600', categoria: 'cortes',       titulo: 'Capas modernas' },
    { id: 6,  url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fbdfd?w=600', categoria: 'color',        titulo: 'Rubio platino' },
    { id: 7,  url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600', categoria: 'peinados',     titulo: 'Recogido elegante' },
    { id: 8,  url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600', categoria: 'cortes',       titulo: 'Pixie cut' },
    { id: 9,  url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600', categoria: 'color',        titulo: 'Mechas chocolate' },
    { id: 10, url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600', categoria: 'tratamientos', titulo: 'Keratina' },
    { id: 11, url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600', categoria: 'peinados',     titulo: 'Trenzas artísticas' },
    { id: 12, url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600', categoria: 'cortes',       titulo: 'Long layers' },
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