import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const clienteGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const usuario = authService.currentUser();

  if (usuario && usuario.rol === 'cliente') {
    return true;
  }

  return router.createUrlTree(['/auth/login']);
};