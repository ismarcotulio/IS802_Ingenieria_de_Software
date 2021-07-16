import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShelfComponent } from './product-shelf.component';

describe('ProductShelfComponent', () => {
  let component: ProductShelfComponent;
  let fixture: ComponentFixture<ProductShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
