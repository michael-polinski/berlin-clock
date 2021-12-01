import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesIndicatorComponent } from './minutes-indicator.component';

describe('MinutesIndicatorComponent', () => {
  let component: MinutesIndicatorComponent;
  let fixture: ComponentFixture<MinutesIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutesIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
