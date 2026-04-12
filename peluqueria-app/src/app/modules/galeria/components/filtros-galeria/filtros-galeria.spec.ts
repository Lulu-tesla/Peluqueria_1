import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosGaleria } from './filtros-galeria';

describe('FiltrosGaleria', () => {
  let component: FiltrosGaleria;
  let fixture: ComponentFixture<FiltrosGaleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosGaleria],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosGaleria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
