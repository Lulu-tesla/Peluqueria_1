/**
 * Modelo que representa un servicio en la DB
 */
export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion: number; 
  icono: string;
  categoria: string;
}