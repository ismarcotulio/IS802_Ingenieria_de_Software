import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShelfDefaultComponent } from './product-shelf-default.component';

describe('ProductShelfDefaultComponent', () => {
  let component: ProductShelfDefaultComponent;
  let fixture: ComponentFixture<ProductShelfDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShelfDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShelfDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
