import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotVerifiedDialogComponent } from './account-not-verified-dialog.component';

describe('AccountNotVerifiedDialogComponent', () => {
  let component: AccountNotVerifiedDialogComponent;
  let fixture: ComponentFixture<AccountNotVerifiedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountNotVerifiedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotVerifiedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
