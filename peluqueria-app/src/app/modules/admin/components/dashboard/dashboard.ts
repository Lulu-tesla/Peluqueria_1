import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

// Interfaz temporal para la vista (idealmente usarías la de core/models/cita.ts)
interface CitaPendiente {
  id: string;
  cliente: string;
  servicio: string;
  hora: Date;
  estado: 'pendiente' | 'confirmada' | 'completada';
  precio: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  authService = inject(AuthService);

  // Datos simulados para armar la UI
  metricas = {
    citasHoy: 5,
    ingresosHoy: 450, // En tu moneda local (Bs, $, etc.)
    nuevosClientes: 2
  };

  citasDeHoy: CitaPendiente[] = [
    { id: '1', cliente: 'María López', servicio: 'Balayage + Corte', hora: new Date(new Date().setHours(10, 0, 0)), estado: 'confirmada', precio: 120 },
    { id: '2', cliente: 'Andrea Silva', servicio: 'Manicura Semipermanente', hora: new Date(new Date().setHours(11, 30, 0)), estado: 'pendiente', precio: 30 },
    { id: '3', cliente: 'Lucía M.', servicio: 'Tratamiento Capilar', hora: new Date(new Date().setHours(14, 0, 0)), estado: 'pendiente', precio: 50 },
  ];

  cambiarEstado(citaId: string, nuevoEstado: 'pendiente' | 'confirmada' | 'completada') {
    const cita = this.citasDeHoy.find(c => c.id === citaId);
    if (cita) {
      cita.estado = nuevoEstado;
      // Aquí a futuro llamarías a tu CitaService para actualizar en la base de datos
    }
  }
}