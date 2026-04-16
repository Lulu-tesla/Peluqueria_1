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
      // Si está logueado, lo mandamos al formulario de citas.
      // A diferencia de la card, aquí no sabemos qué servicio quiere aún, 
      // así que va a la reserva general.
      this.router.navigate(['/citas/reservar']); 
    } else {
      // Si no, al Login, pero le avisamos por qué.
      alert('Para agendar tu cita premium, por favor inicia sesión primero.');
      this.router.navigate(['/login']);
    }
  }
}