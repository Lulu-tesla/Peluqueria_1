import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // 👈 Importamos el Router
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router); // 👈 Inyectamos el Router
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  currentUser = signal<any>(null);

  get isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    this.http.get<any>(`${this.apiUrl}/user`, { headers }).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        
        // 🚀 LA MAGIA: Si el usuario ya está logueado y está en la pantalla de login, lo sacamos de ahí
        if (this.router.url.includes('/login') || this.router.url === '/') {
           if (user.rol === 'admin') {
             this.router.navigate(['/admin']);
           } else {
             this.router.navigate(['/cliente']);
           }
        }
      },
      error: () => this.logout()
    });
  }

  // ... (Tus demás funciones login, registrar, logout se quedan igual)
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

  registrar(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, datos);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']); // Al cerrar sesión, al login
  }
}