import { CommonModule } from '@angular/common';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, NgModel } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaComponent],
      imports: [CommonModule, MaterialCustomModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Init', () => {

    it('should return textarea value in display', () => {
      // Act
      let nativeTextarea = fixture.nativeElement.querySelector(
        'textarea'
      ) as any;
      // Assert
      expect(component.name).toEqual(nativeTextarea.name);
      expect(component.row).toEqual(nativeTextarea.rows);
      expect(component.id).toEqual(nativeTextarea.id);
      expect(component.placeholder).toEqual(nativeTextarea.placeholder);
    });

    it('should return textarea value is change null', () => {
      // Arrange
      const value = spyOn(component.value, 'emit');
      // Act
      component.handlerChangeTextarea();
      let nativeTextarea = fixture.nativeElement.querySelector(
        'textarea'
      ) as any;
      // Assert
      expect(component.name).toEqual(nativeTextarea.name);
      expect(component.row).toEqual(nativeTextarea.rows);
      expect(component.id).toEqual(nativeTextarea.id);
      expect(component.placeholder).toEqual(nativeTextarea.placeholder);
      expect(value).toHaveBeenCalled();
      expect(value).toHaveBeenCalledWith(null);
    });

    it('should return textarea value change', () => {
      //Mock
      component.initValue = '123';
      // Arrange
      const value = spyOn(component.value, 'emit');
      // // Act
      component.handlerChangeTextarea();
      let nativeTextarea: HTMLTextAreaElement = fixture.nativeElement.querySelector(
        'textarea'
      );
      // Assert
      expect(component.name).toEqual(nativeTextarea.name);
      expect(component.row).toEqual(nativeTextarea.rows);
      expect(component.id).toEqual(nativeTextarea.id);
      expect(value).toHaveBeenCalled();
      expect(value).toHaveBeenCalledWith('123');
    });
  });

  describe('On key up', () => {
    it('should change the value', async(() => {
      const spy = spyOn(component.value, 'emit');
      let nativeTextarea = fixture.debugElement.query(By.css('textarea')).nativeElement;
      component.initValue = '123';
      nativeTextarea.dispatchEvent(new Event('keyup'));
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('123');
      });
    }));
  })
});
