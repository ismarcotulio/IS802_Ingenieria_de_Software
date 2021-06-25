import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMarco1Component } from './hijo-marco1.component';

describe('HijoMarco1Component', () => {
  let component: HijoMarco1Component;
  let fixture: ComponentFixture<HijoMarco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoMarco1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoMarco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
