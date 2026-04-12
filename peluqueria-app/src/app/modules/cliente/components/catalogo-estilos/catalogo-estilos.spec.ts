import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEstilos } from './catalogo-estilos';

describe('CatalogoEstilos', () => {
  let component: CatalogoEstilos;
  let fixture: ComponentFixture<CatalogoEstilos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoEstilos],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoEstilos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
