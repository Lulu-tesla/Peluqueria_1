import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';
import { CitaService } from '../../../../core/services/cita'; // 👈 Importamos nuestro servicio

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil implements OnInit {
  authService = inject(AuthService);
  private citaService = inject(CitaService);

  // Arreglos vacíos que se llenarán con los datos de Laravel
  proximasCitas: any[] = [];
  historialCitas: any[] = [];
  
  cargando = true;

  ngOnInit() {
    this.cargarMisCitas();
  }

  cargarMisCitas() {
    const user = this.authService.currentUser();
    if (!user) return;

    // Le pedimos a Laravel las citas de ESTE usuario
    this.citaService.getMisCitas(user.id).subscribe({
      next: (citas: any) => {
        // La fecha de hoy en formato 'YYYY-MM-DD' para comparar
        const hoy = new Date().toISOString().split('T')[0];
        
        // 1. Filtramos las citas "Próximas" (Fecha mayor o igual a hoy)
        this.proximasCitas = citas.filter((cita: any) => cita.fecha >= hoy);
        
        // 2. Filtramos el "Historial" (Citas pasadas)
        this.historialCitas = citas.filter((cita: any) => cita.fecha < hoy);
        
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al cargar perfil:', err);
        this.cargando = false;
      }
    });
  }

  get primerNombre() {
    return this.authService.currentUser()?.nombre.split(' ')[0] || 'Cliente';
  }

  // Extraemos el especialista de las notas (porque así lo guardamos en el Paso anterior)
  // Ej: Si la nota dice "Especialista preferido: Carla V.", esta función saca solo "Carla V."
  obtenerEspecialista(nota: string | null): string {
    if (!nota) return 'Asignado en salón';
    if (nota.includes('Especialista preferido:')) {
      return nota.split('Especialista preferido: ')[1].trim();
    }
    return 'Asignado en salón';
  }
}