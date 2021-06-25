import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDayrielaComponent } from './hijo-dayriela.component';

describe('HijoDayrielaComponent', () => {
  let component: HijoDayrielaComponent;
  let fixture: ComponentFixture<HijoDayrielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoDayrielaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoDayrielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
