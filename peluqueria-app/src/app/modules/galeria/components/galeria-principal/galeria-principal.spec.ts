import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPrincipal } from './galeria-principal';

describe('GaleriaPrincipal', () => {
  let component: GaleriaPrincipal;
  let fixture: ComponentFixture<GaleriaPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
