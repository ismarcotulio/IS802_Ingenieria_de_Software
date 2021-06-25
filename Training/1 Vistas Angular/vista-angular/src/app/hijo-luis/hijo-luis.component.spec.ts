import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoLuisComponent } from './hijo-luis.component';

describe('HijoLuisComponent', () => {
  let component: HijoLuisComponent;
  let fixture: ComponentFixture<HijoLuisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoLuisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoLuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
