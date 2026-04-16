import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        // Si quieres que el contador baje, puedes filtrar solo las que NO están 'completada'
        this.metricas.citasHoy = this.citasDeHoy.filter(c => c.estado !== 'completada').length;
        
        this.metricas.ingresosHoy = this.citasDeHoy.reduce(
          (total, c) => total + parseFloat(c.servicio?.precio || 0), 0
        );

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

  cambiarEstado(citaId: number, nuevoEstado: 'pendiente' | 'confirmada' | 'completada') {
    this.citaService.actualizarEstado(citaId, nuevoEstado).subscribe({
      next: (res) => {
        console.log('Estado actualizado en DB:', res);
        
        // 🔥 LA MAGIA: Recargamos los datos reales para que las métricas 
        // y la tabla se actualicen inmediatamente sin refrescar la página
        this.cargarDatosReales(); 
      },
      error: (err) => {
        console.error('Error al actualizar estado:', err);
        alert('No se pudo actualizar el estado en el servidor.');
      }
    });
  }
}