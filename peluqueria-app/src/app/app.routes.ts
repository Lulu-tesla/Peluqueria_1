import { Routes } from '@angular/router';

// Guards de seguridad (Verifican el rol del usuario antes de entrar)
import { adminGuard } from './core/guards/admin-guard';
import { clienteGuard } from './core/guards/cliente-guard';

// Componentes de Autenticación
import { LoginComponent } from './modules/auth/components/login/login';
import { RegistroComponent } from './modules/auth/components/registro/registro';
import { RecuperarPasswordComponent } from './modules/auth/components/recuperar-password/recuperar-password';

export const routes: Routes = [
  // =========================================================
  // 1. RUTAS PÚBLICAS (Accesibles para todos los visitantes)
  // =========================================================
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home-page/home-page').then(m => m.HomePage)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./modules/home/pages/galeria-page/galeria-page').then(m => m.GaleriaPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./modules/home/pages/servicios-page/servicios-page').then(m => m.ServiciosPage)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./modules/home/pages/nosotros-page/nosotros-page').then(m => m.NosotrosPage)
  },
  {
    path: 'opiniones',
    loadComponent: () => import('./modules/home/pages/opiniones-page/opiniones-page').then(m => m.OpinionesPage)
  },

  // =========================================================
  // 2. RUTAS DE AUTENTICACIÓN
  // =========================================================
  { 
    path: 'auth/login', 
    component: LoginComponent 
  },
  { 
    path: 'registro', 
    component: RegistroComponent 
  },
  { 
    path: 'recuperar-password', 
    component: RecuperarPasswordComponent 
  },

  // =========================================================
  // 3. RUTAS PROTEGIDAS PARA EL CLIENTE (Requieren Login)
  // =========================================================
  {
    path: 'cliente',
    canActivate: [clienteGuard],
    loadComponent: () => import('./modules/cliente/components/perfil/perfil').then(m => m.Perfil)
  },
  {
    path: 'reservar/:servicioId', // Recibe el ID del servicio desde la página de servicios
    canActivate: [clienteGuard],
    loadComponent: () => import('./modules/citas/components/formulario-cita/formulario-cita').then(m => m.FormularioCita)
  },
  { 
    path: 'reservar', 
    redirectTo: 'reservar/null', 
    pathMatch: 'full' 
  },

  // =========================================================
  // 4. RUTAS PROTEGIDAS PARA EL ADMINISTRADOR (Solo Admin)
  // =========================================================
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () => import('./modules/admin/components/dashboard/dashboard').then(m => m.Dashboard)
  },
  /* A futuro aquí añadiremos:
     - admin/gestion-galeria (Para subir las fotos del antes y después)
     - admin/directorio-clientes
     - admin/agenda-completa
  */

  // =========================================================
  // 5. MANEJO DE ERRORES (Cualquier ruta rara vuelve al inicio)
  // =========================================================
  { 
    path: '**', 
    redirectTo: '' 
  }
];