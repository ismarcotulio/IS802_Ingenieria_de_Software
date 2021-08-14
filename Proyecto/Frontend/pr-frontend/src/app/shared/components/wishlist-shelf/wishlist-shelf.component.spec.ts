import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistShelfComponent } from './wishlist-shelf.component';

describe('WishlistShelfComponent', () => {
  let component: WishlistShelfComponent;
  let fixture: ComponentFixture<WishlistShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
