import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 👈 Importamos HttpHeaders
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/citas'; 

  // Función para obtener el token del navegador
  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // 👈 Aquí va la llave maestra
    });
  }

  crearCita(datosCita: any): Observable<any> {
    return this.http.post(this.apiUrl, datosCita);
  }

  getMisCitas(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?user_id=${userId}`);
  }

  getAllCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 🚀 ACTUALIZADO: Ahora envía el Token en los headers
  actualizarEstado(citaId: number, nuevoEstado: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.patch(`${this.apiUrl}/${citaId}/estado`, 
      { estado: nuevoEstado }, 
      { headers } // 👈 ¡Laravel ahora verá la llave!
    );
  }
}