import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotante } from './boton-flotante';

describe('BotonFlotante', () => {
  let component: BotonFlotante;
  let fixture: ComponentFixture<BotonFlotante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonFlotante],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonFlotante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
