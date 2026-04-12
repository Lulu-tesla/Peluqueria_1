import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorEstilos } from './comparador-estilos';

describe('ComparadorEstilos', () => {
  let component: ComparadorEstilos;
  let fixture: ComponentFixture<ComparadorEstilos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparadorEstilos],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparadorEstilos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
