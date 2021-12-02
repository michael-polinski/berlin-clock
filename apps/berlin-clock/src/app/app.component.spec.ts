import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BerlinClockComponent } from './components/berlin-clock/berlin-clock.component';
import { SecondBarComponent } from './components/second-bar/second-bar.component';
import { HoursBarComponent } from './components/hours-bar/hours-bar.component';
import { MinutesBarComponent } from './components/minutes-bar/minutes-bar.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { IsMinPipe } from './pipes/is-min.pipe';
import { IsModuloMinPipe } from './pipes/is-modulo-min.pipe';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BerlinClockComponent,
        DigitalClockComponent,
        SecondBarComponent,
        HoursBarComponent,
        MinutesBarComponent,
        IndicatorComponent,
        IsMinPipe,
        IsModuloMinPipe
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
