import { Injectable, signal } from '@angular/core';

// Definimos una interfaz básica para manejar la sesión en el frontend
export interface UsuarioAuth {
  id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'cliente';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Signal reactivo para el usuario. Accesible desde cualquier componente.
  currentUser = signal<UsuarioAuth | null>(null);

  constructor() {
    // Al cargar la app, comprobamos si el usuario ya tenía sesión iniciada en el navegador
    const session = localStorage.getItem('usuario_sesion');
    if (session) {
      this.currentUser.set(JSON.parse(session));
    }
  }

  // Simulación de petición al servidor (Login)
  async login(email: string, password: string): Promise<UsuarioAuth> {
    return new Promise((resolve, reject) => {
      // Simulamos 1 segundo de retraso de red
      setTimeout(() => {
        // Datos de prueba (hardcodeados por ahora)
        if (email === 'admin@aurastudio.com' && password === 'admin1234') {
          const adminUser: UsuarioAuth = { id: '1', nombre: 'Administrador', email, rol: 'admin' };
          this.guardarSesion(adminUser);
          resolve(adminUser);
        } else if (email === 'cliente@correo.com' && password === 'cliente123') {
          const clienteUser: UsuarioAuth = { id: '2', nombre: 'Lucía M.', email, rol: 'cliente' };
          this.guardarSesion(clienteUser);
          resolve(clienteUser);
        } else {
          reject(new Error('Correo o contraseña incorrectos'));
        }
      }, 1000); 
    });
  }

  logout() {
    localStorage.removeItem('usuario_sesion');
    this.currentUser.set(null); // Limpiamos el estado
  }

  // Guarda en localStorage para que no se cierre sesión al recargar la página (F5)
  private guardarSesion(usuario: UsuarioAuth) {
    localStorage.setItem('usuario_sesion', JSON.stringify(usuario));
    this.currentUser.set(usuario);
  }

  // Getter útil para usar en los Guards más adelante
  get isLogged(): boolean {
    return this.currentUser() !== null;
  }
}