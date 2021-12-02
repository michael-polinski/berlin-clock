import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBarComponent } from './second-bar.component';

/**
 * TODO
 */
describe('SecondIndicatorComponent', () => {
  let component: SecondBarComponent;
  let fixture: ComponentFixture<SecondBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
