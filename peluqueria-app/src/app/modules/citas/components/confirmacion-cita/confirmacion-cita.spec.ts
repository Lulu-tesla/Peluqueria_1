import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionCita } from './confirmacion-cita';

describe('ConfirmacionCita', () => {
  let component: ConfirmacionCita;
  let fixture: ComponentFixture<ConfirmacionCita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionCita],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacionCita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
