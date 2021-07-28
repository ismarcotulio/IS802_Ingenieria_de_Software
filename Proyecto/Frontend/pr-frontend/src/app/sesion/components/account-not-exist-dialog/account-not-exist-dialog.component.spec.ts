import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotExistDialogComponent } from './account-not-exist-dialog.component';

describe('AccountNotExistDialogComponent', () => {
  let component: AccountNotExistDialogComponent;
  let fixture: ComponentFixture<AccountNotExistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountNotExistDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotExistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
