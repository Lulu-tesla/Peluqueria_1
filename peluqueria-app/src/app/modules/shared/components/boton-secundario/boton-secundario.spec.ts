import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSecundario } from './boton-secundario';

describe('BotonSecundario', () => {
  let component: BotonSecundario;
  let fixture: ComponentFixture<BotonSecundario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonSecundario],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonSecundario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
