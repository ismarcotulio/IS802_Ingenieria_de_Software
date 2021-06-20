import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Luis1Component } from './luis1.component';

describe('Luis1Component', () => {
  let component: Luis1Component;
  let fixture: ComponentFixture<Luis1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Luis1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Luis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
