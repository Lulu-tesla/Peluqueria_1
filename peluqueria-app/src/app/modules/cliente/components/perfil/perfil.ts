import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

interface CitaCliente {
  id: string;
  servicio: string;
  fecha: Date;
  precio: number;
  estado: 'proxima' | 'finalizada' | 'cancelada';
  especialista: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {
  authService = inject(AuthService);

  // Datos de ejemplo para la interfaz
  proximasCitas: CitaCliente[] = [
    {
      id: '101',
      servicio: 'Corte y Estilizado',
      fecha: new Date(2026, 3, 20, 15, 30),
      precio: 45,
      estado: 'proxima',
      especialista: 'Carla V.'
    }
  ];

  historialCitas: CitaCliente[] = [
    {
      id: '95',
      servicio: 'Balayage Premium',
      fecha: new Date(2026, 1, 10, 10, 0),
      precio: 150,
      estado: 'finalizada',
      especialista: 'Andrés S.'
    },
    {
      id: '82',
      servicio: 'Tratamiento Hidratante',
      fecha: new Date(2025, 11, 15, 16, 0),
      precio: 35,
      estado: 'finalizada',
      especialista: 'Carla V.'
    }
  ];

  get primerNombre() {
    return this.authService.currentUser()?.nombre.split(' ')[0] || 'Cliente';
  }
}