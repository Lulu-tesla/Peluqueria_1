import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // ✅ Importamos ActivatedRoute
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-formulario-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cita.html',
  styleUrls: ['./formulario-cita.css']
})
export class FormularioCita implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute); // ✅ Inyectamos la ruta
  private router = inject(Router);

  pasoActual = signal(1);
  cargando = signal(false);

  reservaForm: FormGroup = this.fb.group({
    servicioId: ['', Validators.required],
    especialista: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required]
  });

  // Datos extendidos para que coincidan con tus IDs numéricos de servicios-page
  servicios = [
    { id: '1', nombre: 'Corte clásico', precio: 80, duracion: '45 min' },
    { id: '2', nombre: 'Corte + peinado', precio: 120, duracion: '1h 15min' },
    { id: '4', nombre: 'Balayage', precio: 350, duracion: '3h' },
    { id: '7', nombre: 'Keratina', precio: 450, duracion: '3h 30min' },
    // ... agrega el resto según necesites
  ];

  especialistas = ['Cualquiera', 'Carla V.', 'Andrés S.', 'Lucía M.'];
  horasDisponibles = ['09:00', '10:30', '14:00', '15:30', '17:00'];

  ngOnInit() {
    // ✅ Detectamos si viene un servicio seleccionado
    const id = this.route.snapshot.paramMap.get('servicioId');
    if (id && id !== 'null') {
      this.reservaForm.patchValue({ servicioId: id });
      this.pasoActual.set(2); // 🚀 Vamos directo a fecha y hora
    }
  }

  get servicioSeleccionado() {
    return this.servicios.find(s => s.id === this.reservaForm.get('servicioId')?.value);
  }

  avanzar() {
    if (this.pasoActual() === 1 && this.reservaForm.get('servicioId')?.invalid) return;
    if (this.pasoActual() === 2 && (this.reservaForm.get('fecha')?.invalid || this.reservaForm.get('hora')?.invalid)) return;
    this.pasoActual.update(p => p + 1);
  }

  retroceder() { this.pasoActual.update(p => p - 1); }

  seleccionarHora(hora: string) { this.reservaForm.patchValue({ hora }); }

  async confirmarReserva() {
    if (this.reservaForm.invalid) return;
    this.cargando.set(true);
    setTimeout(() => {
      this.cargando.set(false);
      alert('¡Cita confirmada con éxito!');
      this.router.navigate(['/cliente']);
    }, 1500);
  }
}