import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios-destacados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-destacados.html',
  styleUrl: './servicios-destacados.css'
})
export class ServiciosDestacados {
  servicios = [
    {
      num: '01',
      nombre: 'Corte & Estilo',
      descripcion: 'Técnica precisa adaptada a tu estructura facial y estilo de vida.',
      precio: 'Bs. 80'
    },
    {
      num: '02',
      nombre: 'Color & Mechas',
      descripcion: 'Colorimetría profesional con productos de alta gama libres de amoniaco.',
      precio: 'Bs. 150'
    },
    {
      num: '03',
      nombre: 'Tratamientos',
      descripcion: 'Rituales capilares para restaurar brillo, fuerza y suavidad.',
      precio: 'Bs. 120'
    },
    {
      num: '04',
      nombre: 'Barbería',
      descripcion: 'Corte, afeitado clásico y arreglo de barba con navaja.',
      precio: 'Bs. 60'
    },
    {
      num: '05',
      nombre: 'Peinados',
      descripcion: 'Peinados para eventos especiales, bodas y ocasiones únicas.',
      precio: 'Bs. 100'
    },
    {
      num: '06',
      nombre: 'Keratina',
      descripcion: 'Alisado profesional de larga duración con tratamiento nutritivo.',
      precio: 'Bs. 300'
    }
  ];
}