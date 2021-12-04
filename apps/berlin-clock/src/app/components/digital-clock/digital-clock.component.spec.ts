import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockComponent } from './digital-clock.component';
import { DateProviderService } from '../../services/date-provider.service';
import { of } from 'rxjs';

/**
 * Test suite for the {@link DigitalClockComponent}.
 */
describe('DigitalClockComponent', () => {
  const date = new Date();

  let component: DigitalClockComponent;
  let fixture: ComponentFixture<DigitalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalClockComponent ],
      providers: [
        {
          provide: DateProviderService,
          useValue: {
            date$: of(date)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test that the component should create.', () => {
    expect(component).toBeTruthy();
  });

});
