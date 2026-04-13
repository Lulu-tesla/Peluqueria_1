import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scrolled = false;
  menuOpen = false;

  // Inyectamos Autenticación y el Router
  authService = inject(AuthService);
  private router = inject(Router);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  cerrarSesion() {
    this.authService.logout();
    this.closeMenu();
    this.router.navigate(['/']); // Devuelve al inicio al cerrar sesión
  }
}