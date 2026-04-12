import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarClientes } from './gestionar-clientes';

describe('GestionarClientes', () => {
  let component: GestionarClientes;
  let fixture: ComponentFixture<GestionarClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
