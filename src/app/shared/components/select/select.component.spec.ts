import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { LabelledValue } from '../../../store/models/labelvalue.i';

import { SelectComponent } from './select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let matSelect: HTMLElement;
  let matLabel: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [CommonModule, MaterialCustomModule, ScrollingModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Init", () => {
    it("should return true when length of data < scrollLength", () => {
      const fakeData: LabelledValue<string>[] = [
        {
          label: 'Angular',
          value: '1',
        },
        {
          label: 'React',
          value: '2'
        },
        {
          label: 'Ruby on rails',
          value: '3'
        }
      ]
      const expected = true;
      component.default = '';
      component.label = "Label";
      component.data = fakeData;
      component.scrollLength = 5;
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.lengthData).toEqual(expected);
    });
    it("should return false when length of data >= scrollLength", () => {
      const fakeData: LabelledValue<string>[] = [
        {
          label: 'Angular',
          value: '1',
        },
        {
          label: 'React',
          value: '2'
        },
        {
          label: 'Ruby on rails',
          value: '3'
        }
      ]
      const expected = false;
      component.data = fakeData;
      component.scrollLength = 1;
      component.ngOnInit();
      expect(component.lengthData).toEqual(expected);
    });
    it("should return true when data is empty", () => {
      const fakeData: LabelledValue<string>[] = [];
      const expected = true;
      component.data = fakeData;
      component.scrollLength = 10;
      component.ngOnInit();
      expect(component.lengthData).toEqual(expected);
    });
  });
  describe("onSelectionChange", () => {
    it("should emit data", () => {
      // arrange
      const value: string = '';
      const spy = spyOn(component.getValue, "emit");
      // act
      component.onSelectionChange(value);
      // assert
      expect(spy).toHaveBeenCalledWith(value);
    });
  });

  describe("clear", () => {
    it("should clear data", () => {
      component.default = 'React';
      component.clear();
      expect(component.default).toEqual('');
    });
  });

  describe("input", () => {
    it('should render default value', () => {
      component.default = '';
      fixture.detectChanges();
      matSelect = fixture.nativeElement.querySelector('mat-select');
      expect(matSelect.textContent).toContain(component.default);
    });

    it('should render data value and label value', () => {
      component.data = [
        {
          label: 'Angular',
          value: '1',
        },
        {
          label: 'React',
          value: '2'
        },
        {
          label: 'Ruby on rails 1',
          value: '3'
        },
        {
          label: 'Ruby on rails 2',
          value: '4'
        },
      ];
      component.default = '2';
      component.scrollLength = 5;
      component.label = "Your option";
      fixture.detectChanges();
      const trigger = fixture.debugElement.query(By.css('.mat-select')).nativeElement;
      trigger.click();
      fixture.whenStable().then(() => {
        const inquiryOptions = fixture.debugElement.queryAll(By.css('.select-item'));
        for (var i = 1; i < component.data.length; i++) {
          expect(inquiryOptions[i].nativeElement.textContent).toEqual(component.data[i - 1].label)
        }
      });
      matLabel = fixture.nativeElement.querySelector('mat-label');
      expect(matLabel.textContent).toEqual(component.label);
    });
  });
});
