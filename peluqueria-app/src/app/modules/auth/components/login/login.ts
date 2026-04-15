import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  form: FormGroup;
  cargando = false;
  errorMsg = '';
  mostrarPassword = false;

  // Inyección de servicios modernos con inject()
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  constructor() {
    // Inicializamos el formulario con validaciones básicas
    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Atajo para acceder fácilmente a los controles en el HTML
  get f() { return this.form.controls; }

  /**
   * Método de envío del formulario
   */
  onSubmit() {
    // 1. Validamos que el formulario sea correcto visualmente
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cargando = true;
    this.errorMsg = '';
    
    // 2. Extraemos los valores
    const { email, password } = this.form.value;
    
    // 3. Llamamos al servicio (ahora usando .subscribe porque es una petición HTTP real)
    this.authService.login(email, password).subscribe({
      next: (respuesta) => {
        // 'respuesta' es el JSON que nos manda Laravel: { status, access_token, user }
        console.log('Ingreso exitoso:', respuesta);
        
        const usuario = respuesta.user;

        // 4. Redirección inteligente basada en el ROL de la base de datos
        if (usuario.rol === 'admin') {
          this.router.navigate(['/admin/dashboard']); // Ajusta a tu ruta real de admin
        } else {
          this.router.navigate(['/cliente/perfil']); // Ajusta a tu ruta real de cliente
        }
      },
      error: (err) => {
        // Atrapamos errores de credenciales (401) o de servidor
        this.cargando = false;
        console.error('Error en login:', err);
        this.errorMsg = err.error?.message || 'Correo o contraseña incorrectos.';
      },
      complete: () => {
        this.cargando = false;
      }
    });
  }
}