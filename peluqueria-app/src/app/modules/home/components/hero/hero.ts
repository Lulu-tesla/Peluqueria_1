import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
// Importamos tu servicio de autenticación (verifica que la ruta de los ../ sea correcta)
import { AuthService } from '../../../../core/services/auth'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  // Inyectamos las herramientas que necesitamos
  private authService = inject(AuthService);
  private router = inject(Router);

  // La función que tu HTML está llamando
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