import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGaleria } from './item-galeria';

describe('ItemGaleria', () => {
  let component: ItemGaleria;
  let fixture: ComponentFixture<ItemGaleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGaleria],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemGaleria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
