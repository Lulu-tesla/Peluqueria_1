import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './recuperar-password.html',
  styleUrls: ['./recuperar-password.css']
})
export class RecuperarPasswordComponent {
  form: FormGroup;
  cargando = false;
  enviado = false;
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
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
      console.log('Recuperar:', this.form.value);
      this.enviado = true;
    } catch (err: any) {
      this.errorMsg = 'No se pudo enviar el correo. Intenta de nuevo.';
    } finally {
      this.cargando = false;
    }
  }
}