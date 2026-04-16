import { Component, inject } from '@angular/core';
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
export class LoginComponent {
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
        const rolDeUsuario = res.user?.rol; // Extraemos el rol que viene desde Laravel

        if (rolDeUsuario === 'admin') {
          // Si el usuario es administrador, lo mandamos al Dashboard
          this.router.navigate(['/admin']);
        } else {
          // Si es cualquier otro (cliente), lo mandamos a su perfil
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