import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';

import { CheckboxNewComponent } from './checkbox-new.component';

describe('CheckboxNewComponent', () => {
  let component: CheckboxNewComponent;
  let fixture: ComponentFixture<CheckboxNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxNewComponent],
      imports: [CommonModule, MaterialCustomModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('return checkbox default in display', () => {
      component.ngOnInit();
      component.checkboxContent.forEach((item, index) => {
        const nativeCheckboxLabel = fixture.nativeElement.querySelectorAll(
          '.mat-checkbox-label'
        );
        expect(nativeCheckboxLabel[index].textContent.trim()).toEqual(
          item.name
        );
        const nativeCheckbox = fixture.nativeElement.querySelectorAll(
          'mat-checkbox'
        );
        expect(
          nativeCheckbox[index].getAttribute('ng-reflect-model').trim()
        ).toEqual(item.checked.toString());
      });
    });
    
    it('return checkbox value change', () => {
      component.ngOnInit();
      const spy = spyOn(component.dataCheckBox, 'emit');
      component.onChange(true, 1);
      expect(spy).toHaveBeenCalled();
    });

    it('return checkbox clear', () => {
      component.clear()
      component.checkboxContent.forEach((item, index) => {
        const nativeCheckboxLabel = fixture.nativeElement.querySelectorAll(
          '.mat-checkbox-label'
        );
        expect(nativeCheckboxLabel[index].textContent.trim()).toEqual(
          item.name
        );
        const nativeCheckbox = fixture.nativeElement.querySelectorAll(
          'mat-checkbox'
        );
        expect(
          nativeCheckbox[index].getAttribute('ng-reflect-model').trim()
        ).toEqual('false');
      });
    });

  })

  describe('On change', () => {
    it('return checkbox when change in display', () => {
      const element = spyOn(component.dataCheckBox, 'emit');
      const inputDe = fixture.nativeElement.querySelectorAll("input[type='checkbox']");
      inputDe[0].click();
      fixture.detectChanges();
      expect(element).toHaveBeenCalled();
    });
  })
});
