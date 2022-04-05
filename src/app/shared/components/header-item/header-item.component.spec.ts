import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuItem } from 'src/app/store/models/menu-item.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { HeaderItemComponent } from './header-item.component';

describe('HeaderItemComponent', () => {
  let component: HeaderItemComponent;
  let fixture: ComponentFixture<HeaderItemComponent>;
  const tab: MenuItem = {
    link: '/home ',
    icon: 'home',
    text: 'Home',
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialCustomModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [HeaderItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderItemComponent);
    component = fixture.componentInstance;
    component.tab = tab;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });
  it(`should get the tab after ngOnInit`, async(() => {
    fixture.detectChanges(); // This triggers the ngOnInit
    const expected = {
      ...tab,
    };
    expect(component.tab).toEqual(expected);
  }));
  describe('should return value output', () => {
    it('should return value emitLink when call func navigate', () => {
      // arrange
      spyOn(component.emitLink, 'emit').and.returnValue('this is link');

      const expected = 'this is link';

      // assertion
      component.emitLink.subscribe(
        (res) => expect(res).toEqual(expected),
        (err) => fail(err)
      );

      // act
      component.navigate('this is link');
    });
  });

  describe(HeaderItemComponent.prototype.navigate.name, () => {
    it('should emit value of emitLink', () => {
      // arrange
      spyOn(component.emitLink, 'emit');
      // act
      component.navigate('this is link');
      // assert
      expect(component.emitLink.emit).toHaveBeenCalled();
    });
    it('should emit value when button click', () => {
      // arrange
      spyOn(component, 'navigate');
      // act
      const button = fixture.debugElement.nativeElement.querySelector('p');
      button.click();

      // assert
      fixture.whenStable().then(() => {
        expect(component.navigate).toHaveBeenCalled();
      });
    });
  });
});
