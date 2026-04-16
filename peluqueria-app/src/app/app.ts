import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './modules/home/components/navbar/navbar';
import { AuthService } from './core/services/auth'; // 👈 Importamos el servicio correctamente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'peluqueria-app';
  private authService = inject(AuthService);

  ngOnInit() {
    // 🔔 Este es el despertador que lee el token al refrescar con F5
    this.authService.autoLogin();
  }
}