import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesBarComponent } from './minutes-bar.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { IsMinPipe } from '../../pipes/is-min.pipe';
import { IsModuloMinPipe } from '../../pipes/is-modulo-min.pipe';

describe('MinutesIndicatorComponent', () => {
  let component: MinutesBarComponent;
  let fixture: ComponentFixture<MinutesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MinutesBarComponent,
        IndicatorComponent,
        IsMinPipe,
        IsModuloMinPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
