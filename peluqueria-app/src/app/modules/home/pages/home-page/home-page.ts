import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Volvemos a los nombres exactos que tienen tus archivos .ts
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { ServiciosDestacados } from '../../components/servicios-destacados/servicios-destacados';
import { GaleriaPreview } from '../../components/galeria-preview/galeria-preview';
import { Opiniones } from '../../components/opiniones/opiniones';
import { Footer } from '../../components/footer/footer';
import { BotonFlotanteComponent } from '../../components/boton-flotante/boton-flotante';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    GaleriaPreview,
    ServiciosDestacados,
    Opiniones,
    Footer,
    BotonFlotanteComponent, // 👈 Este se queda como Component porque así lo creamos hoy
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  // Mantenemos el nombre de la clase como "HomePage" para no romper las rutas (app.routes.ts)
}