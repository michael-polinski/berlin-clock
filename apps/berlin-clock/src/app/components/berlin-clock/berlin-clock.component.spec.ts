import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinClockComponent } from './berlin-clock.component';

/**
 * TODO
 */
describe('BerlinClockComponent', () => {
  let component: BerlinClockComponent;
  let fixture: ComponentFixture<BerlinClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerlinClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
