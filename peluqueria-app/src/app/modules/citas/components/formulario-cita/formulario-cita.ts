import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 

// Importamos los servicios para la conexión real
import { AuthService } from '../../../../core/services/auth';
import { CitaService } from '../../../../core/services/cita';
import { ServicioService } from '../../../../core/services/servicio';

@Component({
  selector: 'app-formulario-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cita.html',
  styleUrls: ['./formulario-cita.css']
})
export class FormularioCita implements OnInit {
  // Inyección de dependencias
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute); 
  private router = inject(Router);
  private authService = inject(AuthService);
  private citaService = inject(CitaService);
  private servicioService = inject(ServicioService);

  // Señales para controlar la interfaz del wizard
  pasoActual = signal(1);
  cargando = signal(false);

  // Construimos la fecha de hoy, pero forzamos que el año sea 2026
  fechaPorDefecto = '2026' + new Date().toISOString().substring(4, 10);

  // Inicialización del formulario con la fecha por defecto
  reservaForm: FormGroup = this.fb.group({
    servicioId: ['', Validators.required],
    especialista: ['', Validators.required],
    fecha: [this.fechaPorDefecto, Validators.required], // 👈 Fecha por defecto: 2026
    hora: ['', Validators.required]
  });

  // Arreglo vacío que se llenará con los datos de Laravel
  servicios: any[] = [];

  // Datos locales para la UI
  especialistas = ['Cualquiera', 'Carla V.', 'Andrés S.', 'Lucía M.'];
  horasDisponibles = ['09:00', '10:30', '14:00', '15:30', '17:00'];

ngOnInit() {
    // 1. Pedimos los servicios reales a Laravel
    this.servicioService.getServicios().subscribe(data => {
      this.servicios = data;

      // 2. LA MAGIA: Buscamos el ID del servicio en la URL
      // Primero intentamos atraparlo si viene como parámetro de ruta (ej: /reservar/1)
      let idServicio = this.route.snapshot.paramMap.get('id') || this.route.snapshot.paramMap.get('servicioId');

      // Si no estaba ahí, lo buscamos en los parámetros de consulta (ej: /reservar?servicioId=1)
      if (!idServicio) {
        idServicio = this.route.snapshot.queryParamMap.get('servicioId');
      }

      // 3. Si encontramos el número, autoseleccionamos y saltamos de paso
      if (idServicio && idServicio !== 'null') {
        this.reservaForm.patchValue({ servicioId: Number(idServicio) }); // Lo convertimos a número
        this.pasoActual.set(2); // 🚀 Saltamos directamente al Paso 2 (Fecha y Hora)
      }
    });
  }

  // Getter para buscar el objeto completo del servicio seleccionado
  get servicioSeleccionado() {
    return this.servicios.find(s => s.id == this.reservaForm.get('servicioId')?.value);
  }

  // Funciones de navegación del Wizard
  avanzar() {
    if (this.pasoActual() === 1 && this.reservaForm.get('servicioId')?.invalid) return;
    if (this.pasoActual() === 2 && (this.reservaForm.get('fecha')?.invalid || this.reservaForm.get('hora')?.invalid || this.reservaForm.get('especialista')?.invalid)) return;
    this.pasoActual.update(p => p + 1);
  }

  retroceder() { this.pasoActual.update(p => p - 1); }

  seleccionarHora(hora: string) { this.reservaForm.patchValue({ hora }); }

  // 🚀 Función final que envía los datos a la base de datos
  confirmarReserva() {
    if (this.reservaForm.invalid) return;

    // Verificamos quién es el usuario logueado
    const currentUser = this.authService.currentUser();
    if (!currentUser) {
      alert('Debes iniciar sesión para agendar.');
      return;
    }

    this.cargando.set(true);

    // Preparamos los datos EXACTAMENTE como los necesita Laravel
    const datosParaLaravel = {
      user_id: currentUser.id,
      servicio_id: this.reservaForm.value.servicioId,
      fecha: this.reservaForm.value.fecha,
      hora: this.reservaForm.value.hora,
      notas: `Especialista preferido: ${this.reservaForm.value.especialista}` 
    };

    console.log('Enviando a Laravel:', datosParaLaravel); // Para que lo veas en el F12

    // Llamamos al Backend
    this.citaService.crearCita(datosParaLaravel).subscribe({
      next: (res: any) => {
        console.log('Cita guardada en MySQL:', res);
        this.cargando.set(false);
        // 🚨 SI VES ESTE MENSAJE, EL CÓDIGO NUEVO FUNCIONÓ PERFECTO
        alert('¡Cita GUARDADA EN LA BASE DE DATOS con éxito!');
        this.router.navigate(['/']); // Redirigimos al inicio
      },
      error: (err: any) => {
        console.error('Error al agendar:', err);
        this.cargando.set(false);
        alert('Hubo un error al guardar tu cita. Revisa la consola F12.');
      }
    });
  }
}