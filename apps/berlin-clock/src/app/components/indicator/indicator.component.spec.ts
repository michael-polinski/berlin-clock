import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorComponent } from './indicator.component';
import { IndicatorSize } from '../../model/indicator-size.enum';
import { IndicatorShape } from '../../model/indicator-shape.enum';
import { IndicatorColor } from '../../model/indicator-color.enum';
import { MinutesBarComponent } from '../minutes-bar/minutes-bar.component';
import { By } from '@angular/platform-browser';

describe('RectangleIndicatorComponent', () => {
  let component: IndicatorComponent;
  let fixture: ComponentFixture<IndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndicatorComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test that the component should create.', () => {
    expect(component).toBeTruthy();
  });

  it('test that the component defaults missing values on initialization.', () => {
    component.model = {};
    const expectedModel = {
      size: IndicatorSize.NORMAL,
      shape: IndicatorShape.RECTANGLE,
      color: IndicatorColor.PRIMARY
    }

    component.ngOnInit();

    expect(component.model).toStrictEqual(expectedModel);
  });

  it('test that the component defaults missing values on initialization.', () => {
    component.model = {};
    const expectedModel = {
      size: IndicatorSize.NORMAL,
      shape: IndicatorShape.RECTANGLE,
      color: IndicatorColor.PRIMARY
    }

    component.ngOnInit();

    expect(component.model).toStrictEqual(expectedModel);
  });

  it.each`
    providedValue | expectedResult
    ${null}       | ${false}         |
    ${true}       | ${true}          |
    ${false}      | ${false}         |
  `(`test that 'isActive()' returns the expected result.`, async ({ providedValue, expectedResult }) => {
      component.active = providedValue;

      const receivedResult = component.isActive();

      expect(receivedResult).toBe(expectedResult);
    });

  it.each`
    providedValue                        | expectedResult
    ${null}                              | ${false}         |
    ${{shape: IndicatorShape.RECTANGLE}} | ${true}          |
    ${{shape: IndicatorShape.CIRCLE}}    | ${false}         |
  `(`test that 'isRectangle()' returns the expected result.`, async ({ providedValue, expectedResult }) => {
    component.model = providedValue;

    const receivedResult = component.isRectangle();

    expect(receivedResult).toBe(expectedResult);
  });

  it.each`
    providedValue                        | expectedResult
    ${null}                              | ${false}         |
    ${{shape: IndicatorShape.CIRCLE}}    | ${true}          |
    ${{shape: IndicatorShape.RECTANGLE}} | ${false}         |
  `(`test that 'isCircle()' returns the expected result.`, async ({ providedValue, expectedResult }) => {
    component.model = providedValue;

    const receivedResult = component.isCircle();

    expect(receivedResult).toBe(expectedResult);
  });

  it.each`
    providedValue                   | expectedResult
    ${null}                         | ${false}         |
    ${{size: IndicatorSize.SMALL}}  | ${true}          |
    ${{size: IndicatorSize.NORMAL}} | ${false}         |
  `(`test that 'isSmall()' returns the expected result.`, async ({ providedValue, expectedResult }) => {
    component.model = providedValue;

    const receivedResult = component.isSmall();

    expect(receivedResult).toBe(expectedResult);
  });

  it.each`
    providedValue                      | expectedResult
    ${null}                            | ${false}         |
    ${{color: IndicatorColor.PRIMARY}} | ${true}          |
    ${{color: IndicatorColor.ACCENT}}  | ${false}         |
  `(`test that 'isPrimaryColor()' returns the expected result.`, async ({ providedValue, expectedResult }) => {
    component.model = providedValue;

    const receivedResult = component.isPrimaryColor();

    expect(receivedResult).toBe(expectedResult);
  });

  it.each`
    providedValue                      | expectedResult
    ${null}                            | ${false}         |
    ${{color: IndicatorColor.ACCENT}}  | ${true}          |
    ${{color: IndicatorColor.PRIMARY}} | ${false}         |
  `(`test that 'isAccentColor()' returns the expected result.`, async ({ providedValue, expectedResult }) => {
    component.model = providedValue;

    const receivedResult = component.isAccentColor();

    expect(receivedResult).toBe(expectedResult);
  });
});
