import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockComponent } from './digital-clock.component';
import {DateProvider} from "./date-provider";
import {Observable, of} from "rxjs";

/**
 * Test suite for the {@link DigitalClockComponent}.
 */
describe('DigitalClockComponent', () => {
  /**
   * Subject under test.
   */
  let component: DigitalClockComponent;
  /**
   * The subject under test's {@link ComponentFixture}.
   */
  let fixture: ComponentFixture<DigitalClockComponent>;

  /**
   * Async test setup to configure the test bed.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalClockComponent ]
    })
    .compileComponents();
  });

  /**
   * Test setup to inject all needed dependencies.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test that the component should create.', () => {
    expect(component).toBeTruthy();
  });

  it('test that the component initializes as expected.', () => {
    const expectedValue = of() as Observable<Date>;
    const asObservableSpy = spyOn(DateProvider, 'asObservable').and.returnValue(expectedValue);

    component.ngOnInit();

    expect(asObservableSpy).toHaveBeenCalled();
    expect(component.dateProvider).toEqual(expectedValue);
  });
});
