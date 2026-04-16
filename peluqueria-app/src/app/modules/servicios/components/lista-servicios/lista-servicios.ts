import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../../../../core/services/servicio';
import { Servicio } from '../../../../core/models/servicio';
import { CardServicioComponent } from '../card-servicio/card-servicio';

@Component({
  selector: 'app-lista-servicios',
  standalone: true,
  imports: [CommonModule, CardServicioComponent],
  templateUrl: './lista-servicios.html',
  styleUrls: ['./lista-servicios.css']
})
export class ListaServiciosComponent implements OnInit {
  private servicioService = inject(ServicioService);
  
  // Signals para un rendimiento óptimo
  servicios = signal<Servicio[]>([]);
  cargando = signal<boolean>(true);

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.servicioService.getServicios().subscribe({
      next: (data) => {
        this.servicios.set(data); // Guardamos los datos de MySQL
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al traer servicios:', err);
        this.cargando.set(false);
      }
    });
  }
}