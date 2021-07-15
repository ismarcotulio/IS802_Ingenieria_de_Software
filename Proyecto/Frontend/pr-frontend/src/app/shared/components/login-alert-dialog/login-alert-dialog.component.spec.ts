import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlertDialogComponent } from './login-alert-dialog.component';

describe('LoginAlertDialogComponent', () => {
  let component: LoginAlertDialogComponent;
  let fixture: ComponentFixture<LoginAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAlertDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
