import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  currentUser = signal<any>(null);

  // Recuperamos la propiedad que usa tu botón flotante
  get isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  // Login conectado a Laravel
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credenciales).pipe(
      tap(res => {
        if (res.status === 'success') {
          localStorage.setItem('token', res.access_token);
          this.currentUser.set(res.user);
        }
      })
    );
  }

  // RECUPERAMOS TU FUNCIÓN DE REGISTRO
  registrar(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, datos);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
  }
}