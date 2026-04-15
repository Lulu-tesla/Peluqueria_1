import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para hacer peticiones al servidor
import { Observable, tap } from 'rxjs'; // Para manejar flujos de datos

// Definimos la interfaz para que coincida con los campos de tu base de datos en Laravel
export interface UsuarioAuth {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  rol: 'admin' | 'cliente';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // La URL de tu servidor Laravel (asegurate que php artisan serve esté corriendo)
  private apiUrl = 'http://127.0.0.1:8000/api';
  
  // Signal para mantener al usuario logueado en toda la app
  currentUser = signal<UsuarioAuth | null>(null);

  constructor(private http: HttpClient) {
    // Al iniciar, recuperamos la sesión guardada en el navegador si existe
    const session = localStorage.getItem('usuario_sesion');
    if (session) {
      this.currentUser.set(JSON.parse(session));
    }
  }

  /**
   * REGISTRO REAL: Envía los datos del formulario a Laravel
   */
  registrar(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, datos);
  }

  /**
   * LOGIN REAL: Envía email/pass y recibe el Token de Sanctum
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(res => {
        if (res.status === 'success') {
          // Guardamos el token para futuras peticiones
          localStorage.setItem('aura_token', res.access_token);
          // Guardamos los datos del usuario en el Signal y LocalStorage
          this.guardarSesion(res.user);
        }
      })
    );
  }

  /**
   * LOGOUT: Limpia todo el rastro de la sesión
   */
  logout() {
    localStorage.removeItem('usuario_sesion');
    localStorage.removeItem('aura_token');
    this.currentUser.set(null);
  }

  private guardarSesion(usuario: UsuarioAuth) {
    localStorage.setItem('usuario_sesion', JSON.stringify(usuario));
    this.currentUser.set(usuario);
  }

  get isLogged(): boolean {
    return this.currentUser() !== null;
  }
}