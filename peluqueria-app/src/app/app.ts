import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './modules/home/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html', /* ✅ Corregido: Ahora sí lee tu archivo HTML */
  styleUrl: './app.css'
})
export class App {
  title = 'peluqueria-app';
}