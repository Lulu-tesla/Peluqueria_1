import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servicio } from '../../../../core/models/servicio';

@Component({
  selector: 'app-card-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-servicio.html',
  styleUrls: ['./card-servicio.css']
})
export class CardServicioComponent { // 👈 MIRA AQUÍ: Debe decir exactamente así
  @Input() servicio!: Servicio; // Recibe el servicio desde el padre
}