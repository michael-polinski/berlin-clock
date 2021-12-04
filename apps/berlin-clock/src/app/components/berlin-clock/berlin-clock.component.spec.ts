import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinClockComponent } from './berlin-clock.component';
import { SecondBarComponent } from '../second-bar/second-bar.component';
import { HoursBarComponent } from '../hours-bar/hours-bar.component';
import { MinutesBarComponent } from '../minutes-bar/minutes-bar.component';
import { IsMinPipe } from '../../pipes/is-min.pipe';
import { IsModuloMinPipe } from '../../pipes/is-modulo-min.pipe';
import { IndicatorComponent } from '../indicator/indicator.component';

describe('BerlinClockComponent', () => {
  let component: BerlinClockComponent;
  let fixture: ComponentFixture<BerlinClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BerlinClockComponent,
        SecondBarComponent,
        HoursBarComponent,
        MinutesBarComponent,
        IndicatorComponent,
        IsMinPipe,
        IsModuloMinPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`test that the component should create without an error.`, () => {
    expect(component).toBeTruthy();
  });

  it('test that the component should match its snapshot.', () => {
    expect(fixture).toMatchSnapshot();
  });
});
