import { Component, OnInit, inject } from '@angular/core'; // 👈 Añadimos OnInit
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit { // 👈 Implementamos la interfaz
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Tu HTML busca "form", no "loginForm"
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  cargando = false;
  errorMsg = '';
  // Tu HTML necesita esta variable para el ojito de la contraseña
  mostrarPassword = false;

  // 🛡️ Al cargar el componente, verificamos si ya existe una sesión activa
  ngOnInit() {
    if (this.authService.isLogged) {
      const user = this.authService.currentUser();
      // Si ya está logueado, lo sacamos de aquí según su rol
      if (user?.rol === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/cliente']);
      }
    }
  }

  // Tu HTML usa "f['email']" para buscar errores, esto lo habilita:
  get f() {
    return this.form.controls;
  }

  // Tu HTML llama a (ngSubmit)="onSubmit()"
  onSubmit() {
    if (this.form.invalid) return;

    this.cargando = true;
    this.errorMsg = '';

    this.authService.login(this.form.value).subscribe({
      next: (res: any) => {
        this.cargando = false;
        console.log('Login exitoso', res);
        
        // ✨ LÓGICA INTELIGENTE DE ROLES
        const rolDeUsuario = res.user?.rol; 

        if (rolDeUsuario === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/cliente']);
        }
      },
      error: (err: any) => {
        this.cargando = false;
        console.error('Error de login', err);
        
        if (err.status === 401) {
          this.errorMsg = 'Correo o contraseña incorrectos.';
        } else {
          this.errorMsg = 'Hubo un problema de conexión con el servidor.';
        }
      }
    });
  }
}