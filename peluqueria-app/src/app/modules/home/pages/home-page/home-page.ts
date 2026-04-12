import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { ServiciosDestacados } from '../../components/servicios-destacados/servicios-destacados';
import { GaleriaPreview } from '../../components/galeria-preview/galeria-preview';
import { Opiniones } from '../../components/opiniones/opiniones';
import { InfoSalon } from '../../components/info-salon/info-salon';
import { Footer } from '../../components/footer/footer';
import { BotonFlotante } from '../../components/boton-flotante/boton-flotante';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    ServiciosDestacados,
    GaleriaPreview,
    Opiniones,
    InfoSalon,
    Footer,
    BotonFlotante,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {}