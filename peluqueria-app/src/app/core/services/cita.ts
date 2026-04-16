import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/citas'; 

  // Función que ya tenías para guardar
  crearCita(datosCita: any): Observable<any> {
    return this.http.post(this.apiUrl, datosCita);
  }

  // 🚀 NUEVA FUNCIÓN: Pedir las citas de un usuario específico
  getMisCitas(userId: number): Observable<any[]> {
    // Le enviamos a Laravel el ID del usuario en la URL para que nos filtre los datos
    return this.http.get<any[]>(`${this.apiUrl}?user_id=${userId}`);
  }
  // 🚀 NUEVA: Pedir TODAS las citas de la base de datos (Para el Admin)
  getAllCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}