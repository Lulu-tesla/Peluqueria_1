import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicio } from './card-servicio';

describe('CardServicio', () => {
  let component: CardServicio;
  let fixture: ComponentFixture<CardServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServicio],
    }).compileComponents();

    fixture = TestBed.createComponent(CardServicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
