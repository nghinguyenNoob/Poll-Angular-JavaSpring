import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { configButton } from '../../../store/models/button.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [CommonModule, MaterialCustomModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('onBtnClick', () => {
    let config  : configButton= {
      colorButton: 'primary',
      colorMouseOver: 'warn',
      colorMouseOut: 'primary',
      type: 'submit',
      text: 'Click me!',
    };
    beforeEach(() => {
      component.configButton = config;
    })
    it(`active = true`, () => {
      component.active = 'true';
      const button = fixture.debugElement.nativeElement.querySelector(
        'button'
      );
      const spy = jest.spyOn(component.btnClickEmt, 'emit');
      button.click();
      expect(spy).toHaveBeenCalledWith(config.type);
      expect(component.active).toEqual('false');
    });
    it(`active = false`, () => {
      component.active = 'false';
      const button = fixture.debugElement.nativeElement.querySelector(
        'button'
      );
      const spy = jest.spyOn(component.btnClickEmt, 'emit');
      button.click();
      expect(spy).toHaveBeenCalledWith(config.type);
      expect(component.active).toEqual('true');
    });
  });
});
