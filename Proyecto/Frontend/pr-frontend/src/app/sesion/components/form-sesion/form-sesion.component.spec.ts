import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSesionComponent } from './form-sesion.component';

describe('FormSesionComponent', () => {
  let component: FormSesionComponent;
  let fixture: ComponentFixture<FormSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
