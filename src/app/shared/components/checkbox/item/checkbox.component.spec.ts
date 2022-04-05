import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      imports: [CommonModule, MaterialCustomModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init', () => {
    it('return checkbox is default', () => {
      component.valueField = 'test';
      component.label = 'label';
      fixture.detectChanges();
      const inputDe = fixture.debugElement.query(By.css('input'));
      expect(inputDe.nativeElement.value).toEqual(component.valueField);
      expect(inputDe.nativeElement.getAttribute('ng-reflect-name')).toEqual(
        component.label
      );
      expect(inputDe.nativeElement.getAttribute('ng-reflect-model')).toEqual(
        component.isChecked.toString()
      );
    });

    it('return value is true', () => {
      component.isChecked = true;
      const element = spyOn(component.getChange, 'emit');
      component.onChange(component.value);
      component.writeValue(true);
      expect(element).toHaveBeenCalled();
    });

    it('return value is false', () => {
      const element = spyOn(component.getChange, 'emit');
      component.onChange(component.value);
      component.writeValue(true);
      expect(element).toHaveBeenCalled();
    });
    
  });
  describe('On change', () => {
    it('return checkbox is unchecked when change', async(() => {
      const element = spyOn(component.getChange, 'emit');
      const inputDe = fixture.debugElement.query(By.css('input'));
      const inputEl = inputDe.nativeElement;
      inputEl.checked = true;
      inputEl.dispatchEvent(new Event('change'));
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(element).toHaveBeenCalled();
      });
    }));

    it('return checkbox is checked when change', async(() => {
      const element = spyOn(component.getChange, 'emit');
      const inputDe = fixture.debugElement.query(By.css('input'));
      const inputEl = inputDe.nativeElement;
      inputEl.checked = false;
      inputEl.dispatchEvent(new Event('change'));
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(element).toHaveBeenCalled();
      });
    }));

  });
});
