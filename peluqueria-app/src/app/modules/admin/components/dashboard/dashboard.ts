import { Component, OnInit, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';
import { CitaService } from '../../../../core/services/cita';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  authService = inject(AuthService);
  private citaService = inject(CitaService);

  // Inicializamos con valores en 0
  metricas = {
    citasHoy: 0,
    ingresosHoy: 0,
    nuevosClientes: 0
  };

  citasDeHoy: any[] = [];
  cargando = true;

  ngOnInit(): void {
    this.cargarDatosReales();
  }

  cargarDatosReales() {
    this.citaService.getAllCitas().subscribe({
      next: (citas) => {
        const hoy = new Date().toISOString().split('T')[0];

        // 1. Filtramos las citas de hoy
        this.citasDeHoy = citas.filter(c => c.fecha === hoy);

        // 2. Calculamos las métricas dinámicamente
        this.metricas.citasHoy = this.citasDeHoy.length;
        
        // Sumamos los precios de los servicios de hoy
        this.metricas.ingresosHoy = this.citasDeHoy.reduce(
          (total, c) => total + parseFloat(c.servicio?.precio || 0), 0
        );

        // Clientes únicos que tienen cita hoy
        const clientesUnicos = new Set(this.citasDeHoy.map(c => c.user_id));
        this.metricas.nuevosClientes = clientesUnicos.size;

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar dashboard:', err);
        this.cargando = false;
      }
    });
  }

  cambiarEstado(citaId: string, nuevoEstado: 'pendiente' | 'confirmada' | 'completada') {
    // Aquí actualizamos visualmente
    const cita = this.citasDeHoy.find(c => c.id === citaId);
    if (cita) {
      cita.estado = nuevoEstado;
      // TODO: Implementar CitaService.updateEstado(citaId, nuevoEstado) en el futuro
    }
  }
}