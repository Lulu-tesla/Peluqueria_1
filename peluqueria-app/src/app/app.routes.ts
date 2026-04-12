import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login';
import { RegistroComponent } from './modules/auth/components/registro/registro';
import { RecuperarPasswordComponent } from './modules/auth/components/recuperar-password/recuperar-password';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/pages/home-page/home-page').then(m => m.HomePage)
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./modules/home/pages/galeria-page/galeria-page').then(m => m.GaleriaPage)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./modules/home/pages/servicios-page/servicios-page').then(m => m.ServiciosPage)
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./modules/home/pages/nosotros-page/nosotros-page').then(m => m.NosotrosPage)
  },
  {
    path: 'opiniones',
    loadComponent: () =>
      import('./modules/home/pages/opiniones-page/opiniones-page').then(m => m.OpinionesPage)
  },
  { path: 'login',              component: LoginComponent },
  { path: 'registro',           component: RegistroComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
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
  { path: '**', redirectTo: 'login' }
];