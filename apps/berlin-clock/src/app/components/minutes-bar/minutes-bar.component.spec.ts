import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesBarComponent } from './minutes-bar.component';

describe('MinutesIndicatorComponent', () => {
  let component: MinutesBarComponent;
  let fixture: ComponentFixture<MinutesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutesBarComponent ]
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
