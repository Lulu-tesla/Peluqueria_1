import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSalon } from './perfil-salon';

describe('PerfilSalon', () => {
  let component: PerfilSalon;
  let fixture: ComponentFixture<PerfilSalon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSalon],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilSalon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
