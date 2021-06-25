import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tr2HijoDanielComponent } from './tr2-hijo-daniel.component';

describe('Tr2HijoDanielComponent', () => {
  let component: Tr2HijoDanielComponent;
  let fixture: ComponentFixture<Tr2HijoDanielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tr2HijoDanielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tr2HijoDanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
