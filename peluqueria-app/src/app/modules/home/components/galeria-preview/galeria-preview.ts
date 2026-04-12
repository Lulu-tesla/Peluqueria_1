import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FotoPreview {
  url: string;
  titulo: string;
  span?: 'wide' | 'tall' | 'normal';
}

@Component({
  selector: 'app-galeria-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './galeria-preview.html',
  styleUrl: './galeria-preview.css'
})
export class GaleriaPreview {
  fotos: FotoPreview[] = [
    {
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
      titulo: 'Bob clásico',
      span: 'wide'
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
      titulo: 'Balayage dorado',
      span: 'tall'
    },
    {
      url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800',
      titulo: 'Ondas suaves',
      span: 'normal'
    },
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
      titulo: 'Capas modernas',
      span: 'normal'
    },
    {
      url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
      titulo: 'Hidratación profunda',
      span: 'wide'
    },
    {
      url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
      titulo: 'Recogido elegante',
      span: 'normal'
    }
  ];
}