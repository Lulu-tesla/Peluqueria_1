import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';
// Importamos el servicio para traer datos de Laravel
import { ServicioService } from '../../../../core/services/servicio';

@Component({
  selector: 'app-servicios-page',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, RouterModule],
  templateUrl: './servicios-page.html',
  styleUrl: './servicios-page.css'
})
export class ServiciosPage implements OnInit {
  // Inyectamos la herramienta para hablar con Laravel
  private servicioService = inject(ServicioService);

  // Mantenemos tus categorías visuales
  categoriaActiva = 'todos';
  categorias = ['todos', 'cortes', 'color', 'tratamientos', 'peinados'];

  // 1. Vaciamos el arreglo manual. Ahora se llenará con lo que mande la base de datos.
  servicios: any[] = [];
  cargando = true; // Para mostrar un spinner si quieres

  // 2. Al iniciar la página, pedimos los datos al Backend
  ngOnInit(): void {
    this.servicioService.getServicios().subscribe({
      next: (data) => {
        // Asignamos iconos por defecto a los servicios de la BD, 
        // porque en Laravel no creamos columna para iconos.
        this.servicios = data.map(s => ({
          ...s,
          icono: this.asignarIcono(s.categoria) // Función auxiliar abajo
        }));
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar servicios:', err);
        this.cargando = false;
      }
    });
  }

  // 3. Tu función original de filtrado, ahora usa los datos reales
  get serviciosFiltrados(): any[] {
    if (this.categoriaActiva === 'todos') return this.servicios;
    // Compara la categoría asegurándose de que ambas estén en minúsculas
    return this.servicios.filter(s => s.categoria.toLowerCase() === this.categoriaActiva.toLowerCase());
  }

  // 4. Tu función original para cambiar de pestaña
  setCategoria(cat: string): void {
    this.categoriaActiva = cat;
  }

  // Pequeña función para mantener tus iconos bonitos según la categoría que venga de Laravel
  asignarIcono(categoria: string): string {
    const cat = categoria?.toLowerCase() || '';
    if (cat.includes('corte')) return '✂️';
    if (cat.includes('color')) return '🎨';
    if (cat.includes('tratamiento')) return '💆';
    if (cat.includes('peinado')) return '👑';
    return '✨'; // Icono por defecto
  }
}