import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSalon } from './info-salon';

describe('InfoSalon', () => {
  let component: InfoSalon;
  let fixture: ComponentFixture<InfoSalon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSalon],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoSalon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
