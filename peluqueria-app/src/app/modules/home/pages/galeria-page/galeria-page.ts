import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';

interface ImagenGaleria {
  id: number;
  url: string;
  categoria: 'Cortes' | 'Color' | 'Peinados' | 'Antes y Después';
  titulo: string;
}

@Component({
  selector: 'app-galeria-page',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './galeria-page.html',
  styleUrls: ['./galeria-page.css']
})
export class GaleriaPage {
  filtroActivo = signal<'Todos' | 'Cortes' | 'Color' | 'Peinados' | 'Antes y Después'>('Todos');
  categorias = ['Todos', 'Cortes', 'Color', 'Peinados', 'Antes y Después'];
  imagenSeleccionada = signal<ImagenGaleria | null>(null);

  // 25 Imágenes en total con la nueva categoría
  imagenes: ImagenGaleria[] = [
    // 10 Cortes
    { id: 1, url: 'https://picsum.photos/400/500?random=1', categoria: 'Cortes', titulo: 'Corte Bob Clásico' },
    { id: 2, url: 'https://picsum.photos/400/600?random=2', categoria: 'Cortes', titulo: 'Pixie Moderno' },
    { id: 3, url: 'https://picsum.photos/400/400?random=3', categoria: 'Cortes', titulo: 'Capas Largas' },
    { id: 4, url: 'https://picsum.photos/400/700?random=4', categoria: 'Cortes', titulo: 'Corte Mariposa' },
    { id: 5, url: 'https://picsum.photos/400/450?random=5', categoria: 'Cortes', titulo: 'Flequillo Cortina' },
    { id: 6, url: 'https://picsum.photos/400/550?random=6', categoria: 'Cortes', titulo: 'Corte Recto' },
    { id: 7, url: 'https://picsum.photos/400/650?random=7', categoria: 'Cortes', titulo: 'Shaggy Moderno' },
    { id: 8, url: 'https://picsum.photos/400/500?random=8', categoria: 'Cortes', titulo: 'Corte Asimétrico' },
    { id: 9, url: 'https://picsum.photos/400/400?random=9', categoria: 'Cortes', titulo: 'Wolf Cut' },
    { id: 10, url: 'https://picsum.photos/400/600?random=10', categoria: 'Cortes', titulo: 'Desfilado Frontal' },
    
    // 5 Color
    { id: 11, url: 'https://picsum.photos/400/700?random=11', categoria: 'Color', titulo: 'Balayage Dorado' },
    { id: 12, url: 'https://picsum.photos/400/450?random=12', categoria: 'Color', titulo: 'Mechas Babylights' },
    { id: 13, url: 'https://picsum.photos/400/500?random=13', categoria: 'Color', titulo: 'Rubio Platinado' },
    { id: 14, url: 'https://picsum.photos/400/600?random=14', categoria: 'Color', titulo: 'Tinte Cobrizo' },
    { id: 15, url: 'https://picsum.photos/400/550?random=15', categoria: 'Color', titulo: 'Morena Iluminada' },

    // 5 Peinados
    { id: 16, url: 'https://picsum.photos/400/400?random=16', categoria: 'Peinados', titulo: 'Ondas al Agua' },
    { id: 17, url: 'https://picsum.photos/400/650?random=17', categoria: 'Peinados', titulo: 'Recogido Elegante' },
    { id: 18, url: 'https://picsum.photos/400/500?random=18', categoria: 'Peinados', titulo: 'Trenza Bohemia' },
    { id: 19, url: 'https://picsum.photos/400/700?random=19', categoria: 'Peinados', titulo: 'Semi-recogido Romántico' },
    { id: 20, url: 'https://picsum.photos/400/450?random=20', categoria: 'Peinados', titulo: 'Coleta Alta con Volumen' },

    // 5 Antes y Después (Transformaciones)
    { id: 21, url: 'https://picsum.photos/400/550?random=21', categoria: 'Antes y Después', titulo: 'Cambio Extremo Color' },
    { id: 22, url: 'https://picsum.photos/400/600?random=22', categoria: 'Antes y Después', titulo: 'Corrección de Tinte' },
    { id: 23, url: 'https://picsum.photos/400/400?random=23', categoria: 'Antes y Después', titulo: 'Renovación de Corte' },
    { id: 24, url: 'https://picsum.photos/400/650?random=24', categoria: 'Antes y Después', titulo: 'De Largo a Bob' },
    { id: 25, url: 'https://picsum.photos/400/500?random=25', categoria: 'Antes y Después', titulo: 'Tratamiento de Brillo' },
  ];

  imagenesFiltradas = computed(() => {
    const filtro = this.filtroActivo();
    if (filtro === 'Todos') return this.imagenes;
    return this.imagenes.filter(img => img.categoria === filtro);
  });

  cambiarFiltro(categoria: any) {
    this.filtroActivo.set(categoria);
  }

  abrirLightbox(imagen: ImagenGaleria) {
    this.imagenSeleccionada.set(imagen);
    document.body.style.overflow = 'hidden';
  }

  cerrarLightbox() {
    this.imagenSeleccionada.set(null);
    document.body.style.overflow = 'auto';
  }
}