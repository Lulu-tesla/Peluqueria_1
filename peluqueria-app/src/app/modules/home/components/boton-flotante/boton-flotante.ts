import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth'; // 👈 Ajusta la ruta según la ubicación real

@Component({
  selector: 'app-boton-flotante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-flotante.html',
  styleUrls: ['./boton-flotante.css']
})
export class BotonFlotanteComponent {
  // Inyectamos lo necesario
  private authService = inject(AuthService);
  private router = inject(Router);

  /**
   * Lógica inteligente para el botón flotante de Reserva
   */
iniciarReservaGeneral() {
    if (this.authService.isLogged) {
      // Si está logueado, lo mandamos al catálogo que sí existe en tus rutas
      this.router.navigate(['/servicios']); 
    } else {
      // Si no, al Login usando tu ruta exacta
      alert('Para agendar tu cita premium, por favor inicia sesión primero.');
      this.router.navigate(['/auth/login']); 
    }
  }
}