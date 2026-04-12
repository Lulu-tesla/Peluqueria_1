import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/pages/home-page/home-page').then(m => m.HomePage)
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./modules/auth/components/login/login').then(m => m.Login)
  },
  {
    path: 'auth/registro',
    loadComponent: () =>
      import('./modules/auth/components/registro/registro').then(m => m.Registro)
  },
  {
    path: 'cliente',
    loadComponent: () =>
      import('./modules/cliente/components/perfil/perfil').then(m => m.Perfil)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./modules/admin/components/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: '**',
    redirectTo: ''
  }
];