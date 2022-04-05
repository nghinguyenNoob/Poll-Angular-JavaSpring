import { FormsModule } from '@angular/forms';
import { HeaderItemComponent } from './../header-item/header-item.component';
import { NotificationIconComponent } from './../notification-icon/notification-icon.component';
import { SharedModule } from './../../shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { CommonModule } from '@angular/common';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SocketClientService } from 'src/app/socket-client/socket-client.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const menu = [
    {
      text: 'Home',
      link: '/',
      icon: 'home',
    },
    {
      text: 'Todo',
      link: '/todo',
      icon: 'list_alt',
    },
    {
      text: 'Schedule',
      link: '/schedule',
      icon: 'list_alt',
    },
  ];
  let router: Router;
  let socketService: SocketClientService;
  const countNotification = 99;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialCustomModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        HeaderComponent,
        HeaderItemComponent,
        NotificationIconComponent,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();
    router = TestBed.inject(Router);
    socketService = TestBed.inject(SocketClientService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.menu = menu;
    component.countNotification = countNotification;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialize', () => {
    /**
     *  Test case : Initialize
     *  1. should show ul>li length when html render with input Menu
     *  2. should return toggleMenu = true
     *  3. should return toggleMenu = false
     */
    it('should show ul>li length when html render with input Menu', () => {
      const inputDe = fixture.debugElement.queryAll(By.css('li')).length;
      expect(component.menu.length).toBe(inputDe);
    });
    it('should return toggleMenu = true', () => {
      const spyOnResize = spyOn(component, 'getScreenSize');
      // size screen pc
      window = Object.assign(window, { innerWidth: 3000 });
      window.dispatchEvent(new Event('resize'));

      expect(spyOnResize).toHaveBeenCalled();
      expect(component.toggleMenu).toBe(true);
      expect(component.showToggle).toBe(false);
    });

    it('should return toggleMenu = false', () => {
      // size screen mobile
      window = Object.assign(window, { innerWidth: 425 });

      window.dispatchEvent(new Event('resize'));

      expect(component.toggleMenu).toBe(false);
    });
  });

  describe(HeaderComponent.prototype.emitLink.name, () => {
    /**
     *  Test case : emitLink
     *  1. should emit value of emitValueLink
     */
    it('should emit value of emitValueLink', () => {
      // arrange
      spyOn(component.emitValueLink, 'emit');
      // act
      component.emitLink('this is data');
      // assert
      expect(component.emitValueLink.emit).toHaveBeenCalled();
    });
  });
  describe(HeaderComponent.prototype.clickLogout.name, () => {
    /**
     *  Test case : clickLogout
     *  1. should call navigate and call disconnectSocket
     */
    it('should call navigate and call disconnectSocket', () => {
      // arrange
      const navigateSpy = spyOn(router, 'navigate');
      const socketSpy = spyOn(socketService, 'disconnectSocket');
      spyOn(localStorage, 'clear');
      // act
      component.clickLogout();

      // assert
      expect(socketSpy).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledWith(['/login']);
      expect(localStorage.clear).toHaveBeenCalled();
    });
  });
  describe(HeaderComponent.prototype.navigateNotification.name, () => {
    it('should emit value of emitValueNotification', () => {
      // arrange
      spyOn(component.emitValueNotification, 'emit');
      // act
      component.navigateNotification('this is data');
      // assert
      expect(component.emitValueNotification.emit).toHaveBeenCalled();
    });
  });
  describe(HeaderComponent.prototype.getScreenSize.name, () => {
    /**
     *  Test case : getScreenSize
     *  1. should trigger getScreenSize method when window is resized
     *  2. should trigger getScreenSize method when window is resized small
     */
    it('should trigger getScreenSize method when window is resized', () => {
      // arrange
      const spyOnResize = spyOn(component, 'getScreenSize');
      // act
      window.dispatchEvent(new Event('resize'));
      // assert
      expect(spyOnResize).toHaveBeenCalled();
      expect(component.toggleMenu).toBe(false);
    });
    it('should trigger getScreenSize method when window is resized small', () => {
      // Change the viewport to 300px.
      window = Object.assign(window, { innerWidth: 3000 });
      let event;
      if (typeof Event === 'function') {
        event = new Event('resize');
      } else {
        /*IE*/
        event = document.createEvent('Event');
        event.initEvent('resize', true, true);
      }
      window.dispatchEvent(event);

      component.getScreenSize(null);

      // assertion
      expect(component.toggleMenu).toBe(true);
      expect(component.showToggle).toBe(false);
    });
  });

  describe('should return value emit', () => {
    /**
     *  Test case : Output
     *  1. should return value emitValueLink when call func emitLink
     *  2. should return value emitValueNotification when call func navigateNotification
     */
    it('should return value emitValueLink when call func emitLink', () => {
      // arrange
      spyOn(component.emitValueLink, 'emit').and.returnValue('this is data');
      component.emitLink('this is data');
      const expected = 'this is data';

      // assertion
      component.emitValueLink.subscribe(
        (res) => expect(res).toEqual(expected),
        (err) => fail(err)
      );
    });
    it('should return value emitValueNotification when call func navigateNotification', () => {
      // arrange
      spyOn(component.emitValueNotification, 'emit');

      const expected = 'this is data emitValueNotification';
      // assertion
      component.emitValueNotification.subscribe(
        (data) => expect(data).toEqual(expected),
        (err) => fail(err)
      );

      // action
      component.navigateNotification('this is data emitValueNotification');
    });
  });
});
