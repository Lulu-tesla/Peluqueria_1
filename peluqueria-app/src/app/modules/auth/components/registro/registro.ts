import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// 1. Añadimos el servicio que se comunica con Laravel
import { AuthService } from '../../../../core/services/auth'; 

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  form: FormGroup;
  cargando = false;
  errorMsg = '';
  mostrarPassword = false;
  mostrarConfirm = false;

  // 2. Inyectamos AuthService aquí en el constructor
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService 
  ) {
    this.form = this.fb.group({
      nombre:            ['', [Validators.required, Validators.minLength(2)]],
      apellido:          ['', [Validators.required, Validators.minLength(2)]],
      email:             ['', [Validators.required, Validators.email]],
      telefono:          [''],
      password:          ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', Validators.required],
      terminos:          [false, Validators.requiredTrue]
    }, { validators: this.passwordsIguales });
  }

  passwordsIguales(group: AbstractControl) {
    const pass    = group.get('password')?.value;
    const confirm = group.get('confirmarPassword')?.value;
    return pass === confirm ? null : { noCoinciden: true };
  }

  get f() { return this.form.controls; }

  // 3. Modificamos onSubmit para enviar los datos reales
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.cargando = true;
    this.errorMsg = '';
    
    // Separamos los datos que Laravel SÍ necesita de los que no (terminos y confirmar)
    const { confirmarPassword, terminos, ...datosParaLaravel } = this.form.value;

    // Llamamos al Backend
    this.authService.registrar(datosParaLaravel).subscribe({
      next: (res) => {
        console.log('Registro exitoso en la BD:', res);
        alert('Cuenta creada con éxito. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']); // Recién aquí mandamos al usuario al login
      },
      error: (err) => {
        console.error('Error de Laravel:', err);
        // Mostrar el error real que manda Laravel (ej. el correo ya existe)
        this.errorMsg = err.error?.message || err.error?.errors?.email?.[0] || 'Error al registrarse. Intenta de nuevo.';
        this.cargando = false;
      },
      complete: () => {
        this.cargando = false;
      }
    });
  }
}