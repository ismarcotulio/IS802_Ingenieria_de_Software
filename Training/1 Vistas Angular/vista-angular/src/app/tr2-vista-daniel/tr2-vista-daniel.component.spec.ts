import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tr2VistaDanielComponent } from './tr2-vista-daniel.component';

describe('Tr2VistaDanielComponent', () => {
  let component: Tr2VistaDanielComponent;
  let fixture: ComponentFixture<Tr2VistaDanielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tr2VistaDanielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tr2VistaDanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
