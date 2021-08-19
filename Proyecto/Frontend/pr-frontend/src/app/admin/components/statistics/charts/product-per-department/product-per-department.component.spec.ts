import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPerDepartmentComponent } from './product-per-department.component';

describe('ProductPerDepartmentComponent', () => {
  let component: ProductPerDepartmentComponent;
  let fixture: ComponentFixture<ProductPerDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPerDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPerDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
