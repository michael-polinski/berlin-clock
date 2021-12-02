import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { SecondBarComponent } from './components/second-bar/second-bar.component';
import { BerlinClockComponent } from './components/berlin-clock/berlin-clock.component';
import { HoursBarComponent } from './components/hours-bar/hours-bar.component';
import { IsMinPipe } from './pipes/isMin.pipe';
import { MinutesBarComponent } from './components/minutes-bar/minutes-bar.component';
import { IsModRestMinPipe } from './pipes/isModRestMin.pipe';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { CommonModule } from '@angular/common';

/**
 * Main module for the app.
 */
@NgModule({
  declarations: [
    AppComponent,

    DigitalClockComponent,
    SecondBarComponent,
    BerlinClockComponent,
    HoursBarComponent,
    MinutesBarComponent,
    IndicatorComponent,

    IsMinPipe,
    IsModRestMinPipe
  ],
  imports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
