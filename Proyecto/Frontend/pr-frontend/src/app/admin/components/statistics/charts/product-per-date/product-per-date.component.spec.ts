import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPerDateComponent } from './product-per-date.component';

describe('ProductPerDateComponent', () => {
  let component: ProductPerDateComponent;
  let fixture: ComponentFixture<ProductPerDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPerDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPerDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
