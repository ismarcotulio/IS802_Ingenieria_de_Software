import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandoHijoComponent } from './brando-hijo.component';

describe('BrandoHijoComponent', () => {
  let component: BrandoHijoComponent;
  let fixture: ComponentFixture<BrandoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandoHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
