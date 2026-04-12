import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder, private router: Router) {
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

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.cargando = true;
    this.errorMsg = '';
    try {
      console.log('Registro:', this.form.value);
      this.router.navigate(['/login']);
    } catch (err: any) {
      this.errorMsg = 'Error al registrarse. Intenta de nuevo.';
    } finally {
      this.cargando = false;
    }
  }
}