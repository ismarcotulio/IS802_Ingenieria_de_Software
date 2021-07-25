import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidDataDialogComponent } from './invalid-data-dialog.component';

describe('InvalidDataDialogComponent', () => {
  let component: InvalidDataDialogComponent;
  let fixture: ComponentFixture<InvalidDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
