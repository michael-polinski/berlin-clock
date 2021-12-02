import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleIndicatorComponent } from './rectangle-indicator.component';

describe('RectangleIndicatorComponent', () => {
  let component: RectangleIndicatorComponent;
  let fixture: ComponentFixture<RectangleIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangleIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
