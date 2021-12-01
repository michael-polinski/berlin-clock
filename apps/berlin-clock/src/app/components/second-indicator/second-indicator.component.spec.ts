import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondIndicatorComponent } from './second-indicator.component';

/**
 * TODO
 */
describe('SecondIndicatorComponent', () => {
  let component: SecondIndicatorComponent;
  let fixture: ComponentFixture<SecondIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
