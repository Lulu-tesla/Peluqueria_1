import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPreview } from './galeria-preview';

describe('GaleriaPreview', () => {
  let component: GaleriaPreview;
  let fixture: ComponentFixture<GaleriaPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
