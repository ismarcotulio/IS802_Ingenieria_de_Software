import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifyDialogComponent } from './email-verify-dialog.component';

describe('EmailVerifyDialogComponent', () => {
  let component: EmailVerifyDialogComponent;
  let fixture: ComponentFixture<EmailVerifyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerifyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
