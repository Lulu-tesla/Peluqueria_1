import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesDespues } from './antes-despues';

describe('AntesDespues', () => {
  let component: AntesDespues;
  let fixture: ComponentFixture<AntesDespues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntesDespues],
    }).compileComponents();

    fixture = TestBed.createComponent(AntesDespues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
