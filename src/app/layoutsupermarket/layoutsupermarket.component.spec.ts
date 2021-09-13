import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsupermarketComponent } from './layoutsupermarket.component';

describe('LayoutsupermarketComponent', () => {
  let component: LayoutsupermarketComponent;
  let fixture: ComponentFixture<LayoutsupermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsupermarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
