import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMarco2Component } from './vista-marco2.component';

describe('VistaMarco2Component', () => {
  let component: VistaMarco2Component;
  let fixture: ComponentFixture<VistaMarco2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMarco2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMarco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
