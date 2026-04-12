import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GaleriaItem {
  nombre: string;
  categoria: string;
  tipo: string;
}

@Component({
  selector: 'app-galeria-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-preview.html',
  styleUrl: './galeria-preview.css'
})
export class GaleriaPreview {
  filtroActivo = 'todos';

  galeria: GaleriaItem[] = [
    { nombre: 'Corte Bob Clásico',     categoria: 'CORTE',    tipo: 'corte'    },
    { nombre: 'Balayage Natural',      categoria: 'COLOR',    tipo: 'color'    },
    { nombre: 'Ondas Románticas',      categoria: 'PEINADO',  tipo: 'peinado'  },
    { nombre: 'Degradado Moderno',     categoria: 'BARBERÍA', tipo: 'barberia' },
    { nombre: 'Mechas Californianas',  categoria: 'COLOR',    tipo: 'color'    },
    { nombre: 'Corte Pixie',           categoria: 'CORTE',    tipo: 'corte'    },
    { nombre: 'Recogido Elegante',     categoria: 'PEINADO',  tipo: 'peinado'  },
    { nombre: 'Barba Perfilada',       categoria: 'BARBERÍA', tipo: 'barberia' },
    { nombre: 'Ombré Caramelo',        categoria: 'COLOR',    tipo: 'color'    },
  ];

  get galeriaFiltrada(): GaleriaItem[] {
    if (this.filtroActivo === 'todos') return this.galeria;
    return this.galeria.filter(i => i.tipo === this.filtroActivo);
  }

  filtrar(tipo: string) {
    this.filtroActivo = tipo;
  }
}