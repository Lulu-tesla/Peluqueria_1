import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth'; // Asegúrate de que la ruta coincida

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

  // Inyección del servicio de Autenticación
  private authService = inject(AuthService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.form.controls; }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.cargando = true;
    this.errorMsg = '';
    
    try {
      // Extraemos los valores del formulario
      const { email, password } = this.form.value;
      
      // Llamamos a nuestro servicio y esperamos la respuesta
      const usuario = await this.authService.login(email, password);
      
      console.log('Ingreso exitoso:', usuario);
      
      // Redirección inteligente basada en el rol
      if (usuario.rol === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/cliente']);
      }
      
    } catch (err: any) {
      // Atrapamos el error del servicio (Credenciales incorrectas)
      this.errorMsg = err.message || 'Error al intentar iniciar sesión.';
    } finally {
      this.cargando = false;
    }
  }
}