import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSesionComponent } from './view-sesion.component';

describe('ViewSesionComponent', () => {
  let component: ViewSesionComponent;
  let fixture: ComponentFixture<ViewSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
