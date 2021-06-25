import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandoComponent } from './brando.component';

describe('BrandoComponent', () => {
  let component: BrandoComponent;
  let fixture: ComponentFixture<BrandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
