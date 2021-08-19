import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPerSuscriptionComponent } from './category-per-suscription.component';

describe('CategoryPerSuscriptionComponent', () => {
  let component: CategoryPerSuscriptionComponent;
  let fixture: ComponentFixture<CategoryPerSuscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPerSuscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPerSuscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
