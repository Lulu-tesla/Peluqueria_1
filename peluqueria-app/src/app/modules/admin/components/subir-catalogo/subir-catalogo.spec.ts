import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirCatalogo } from './subir-catalogo';

describe('SubirCatalogo', () => {
  let component: SubirCatalogo;
  let fixture: ComponentFixture<SubirCatalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirCatalogo],
    }).compileComponents();

    fixture = TestBed.createComponent(SubirCatalogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
