import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private http = inject(HttpClient);
  // URL configurada por Socio B en api.php
  private apiUrl = 'http://127.0.0.1:8000/api/servicios'; 

  /**
   * Obtiene la lista de servicios desde Laravel
   */
  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.apiUrl);
  }
}