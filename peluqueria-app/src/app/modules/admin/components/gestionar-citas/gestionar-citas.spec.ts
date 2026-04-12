import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCitas } from './gestionar-citas';

describe('GestionarCitas', () => {
  let component: GestionarCitas;
  let fixture: ComponentFixture<GestionarCitas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarCitas],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarCitas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
