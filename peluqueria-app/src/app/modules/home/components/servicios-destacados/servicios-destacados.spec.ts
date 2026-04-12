import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDestacados } from './servicios-destacados';

describe('ServiciosDestacados', () => {
  let component: ServiciosDestacados;
  let fixture: ComponentFixture<ServiciosDestacados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosDestacados],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosDestacados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
