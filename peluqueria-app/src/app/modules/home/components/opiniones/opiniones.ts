import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opiniones.html',
  styleUrl: './opiniones.css'
})
export class Opiniones {
  resenas = [
    {
      texto: 'El mejor salón de La Paz. El resultado superó todas mis expectativas.',
      autor: 'María G.'
    },
    {
      texto: 'Profesionales increíbles, atención personalizada y resultados perfectos.',
      autor: 'Carlos R.'
    },
    {
      texto: 'Me encantó el ambiente y la calidad del trabajo. Volveré siempre.',
      autor: 'Sofía M.'
    }
  ];
}