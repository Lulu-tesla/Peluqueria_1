import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPasswordComponent } from './recuperar-password'; // ✅ Corregido

describe('RecuperarPasswordComponent', () => { // ✅ Corregido
  let component: RecuperarPasswordComponent; // ✅ Corregido
  let fixture: ComponentFixture<RecuperarPasswordComponent>; // ✅ Corregido

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarPasswordComponent], // ✅ Corregido
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarPasswordComponent); // ✅ Corregido
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});