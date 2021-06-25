import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMarco1Component } from './vista-marco1.component';

describe('VistaMarco1Component', () => {
  let component: VistaMarco1Component;
  let fixture: ComponentFixture<VistaMarco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMarco1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMarco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
