import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const usuario = authService.currentUser();

  // Si existe el usuario y su rol es admin, lo dejamos pasar
  if (usuario && usuario.rol === 'admin') {
    return true;
  }

  // Si no es admin o no está logueado, lo pateamos al login
  return router.createUrlTree(['/auth/login']);
};