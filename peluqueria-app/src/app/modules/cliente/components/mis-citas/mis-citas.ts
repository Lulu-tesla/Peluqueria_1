import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importamos los servicios necesarios
import { CitaService } from '../../../../core/services/cita';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-mis-citas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-citas.html',
  styleUrls: ['./mis-citas.css']
})
export class MisCitasComponent implements OnInit {
  private citaService = inject(CitaService);
  private authService = inject(AuthService);

  // Usamos signals para un rendimiento óptimo
  citas = signal<any[]>([]);
  cargando = signal<boolean>(true);
  errorMsg = signal<string>('');

  ngOnInit() {
    this.obtenerHistorial();
  }

  obtenerHistorial() {
    const currentUser = this.authService.currentUser();

    // Verificamos si hay alguien logueado
    if (!currentUser) {
      this.errorMsg.set('Debes iniciar sesión para ver tu historial.');
      this.cargando.set(false);
      return;
    }

    // Pedimos las citas a Laravel usando el ID del usuario
    this.citaService.getMisCitas(currentUser.id).subscribe({
      next: (data) => {
        // En caso de que la API devuelva todas las citas, las filtramos aquí por seguridad
        const misCitasFiltradas = data.filter(cita => cita.user_id === currentUser.id);
        this.citas.set(misCitasFiltradas);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al traer el historial:', err);
        this.errorMsg.set('Hubo un problema al cargar tus citas.');
        this.cargando.set(false);
      }
    });
  }
}