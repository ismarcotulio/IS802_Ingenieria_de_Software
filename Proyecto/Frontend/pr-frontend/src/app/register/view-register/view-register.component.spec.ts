import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterComponent } from './view-register.component';

describe('ViewRegisterComponent', () => {
  let component: ViewRegisterComponent;
  let fixture: ComponentFixture<ViewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
