import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerProductComponent } from './user-per-product.component';

describe('UserPerProductComponent', () => {
  let component: UserPerProductComponent;
  let fixture: ComponentFixture<UserPerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPerProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
