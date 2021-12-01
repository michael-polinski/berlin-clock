import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { SecondIndicatorComponent } from './components/second-indicator/second-indicator.component';
import { BerlinClockComponent } from './components/berlin-clock/berlin-clock.component';
import { HoursIndicatorComponent } from './components/hours/hours-indicator/hours-indicator.component';
import { SingleHourIndicatorComponent } from './components/hours/single-hour-indicator/single-hour-indicator.component';
import { IsMinPipe } from './pipes/isMin.pipe';
import { MinutesIndicatorComponent } from './components/minutes/minutes-indicator/minutes-indicator.component';
import { SingleMinuteBaseFiveIndicatorComponent } from './components/minutes/single-minute-base-five-indicator/single-minute-base-five-indicator.component';
import { SingleMinuteBaseTwoIndicatorComponent } from './components/minutes/single-minute-base-two-indicator/single-minute-base-two-indicator.component';
import { IsMinModRestPipe } from './pipes/isMinModRest.pipe';

/**
 * Main module for the app.
 */
@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    SecondIndicatorComponent,
    BerlinClockComponent,
    HoursIndicatorComponent,
    SingleHourIndicatorComponent,
    IsMinPipe,
    MinutesIndicatorComponent,
    SingleMinuteBaseFiveIndicatorComponent,
    SingleMinuteBaseTwoIndicatorComponent,
    IsMinModRestPipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
