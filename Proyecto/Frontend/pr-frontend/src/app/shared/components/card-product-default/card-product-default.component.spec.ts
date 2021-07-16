import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductDefaultComponent } from './card-product-default.component';

describe('CardProductDefaultComponent', () => {
  let component: CardProductDefaultComponent;
  let fixture: ComponentFixture<CardProductDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
