import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductWishlistComponent } from './card-product-wishlist.component';

describe('CardProductWishlistComponent', () => {
  let component: CardProductWishlistComponent;
  let fixture: ComponentFixture<CardProductWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
