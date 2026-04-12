import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPrimario } from './boton-primario';

describe('BotonPrimario', () => {
  let component: BotonPrimario;
  let fixture: ComponentFixture<BotonPrimario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonPrimario],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonPrimario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
