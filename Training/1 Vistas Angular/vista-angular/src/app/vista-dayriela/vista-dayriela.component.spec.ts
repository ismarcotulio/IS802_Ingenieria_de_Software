import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDayrielaComponent } from './vista-dayriela.component';

describe('VistaDayrielaComponent', () => {
  let component: VistaDayrielaComponent;
  let fixture: ComponentFixture<VistaDayrielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDayrielaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDayrielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
