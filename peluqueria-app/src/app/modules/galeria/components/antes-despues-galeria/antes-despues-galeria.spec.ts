import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesDespuesGaleria } from './antes-despues-galeria';

describe('AntesDespuesGaleria', () => {
  let component: AntesDespuesGaleria;
  let fixture: ComponentFixture<AntesDespuesGaleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntesDespuesGaleria],
    }).compileComponents();

    fixture = TestBed.createComponent(AntesDespuesGaleria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
