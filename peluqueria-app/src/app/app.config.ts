import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http'; // 👈 Vital para que funcionen las APIs
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes, 
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }) 
    ),
    provideAnimationsAsync(),
    provideHttpClient(), // 👈 Activamos el "teléfono" para llamar a Laravel
  ]
};