import { element } from 'protractor';
import { MaterialCustomModule } from './../../material-custom/material-custom.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationIconComponent } from './notification-icon.component';

describe('NotificationIconComponent', () => {
  let component: NotificationIconComponent;
  let fixture: ComponentFixture<NotificationIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationIconComponent ],
      imports: [MaterialCustomModule],
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init', () =>{

    beforeEach(() => {
      component.hidden = false;
      fixture.detectChanges();
    });

    it('should return when valid', () =>{
      // arrange
      component.countNotification = 12;
      fixture.detectChanges();
      component.ngOnInit();
      // act
      const element = fixture.debugElement.nativeElement.querySelector('mat-icon span') as any;
      const expected = Number(element.innerHTML);
      // assert
      expect(component.hidden).toEqual(false);
      expect(component.countNotification).toEqual(expected);
    });

    it('should return when invalid', () =>{
      // arrange
      component.countNotification = undefined;
      fixture.detectChanges();
      component.ngOnInit();
      // act
      // assert
      expect(component.hidden).toEqual(true);
    });
  })

  describe('ngOnChanges', () =>{

    beforeEach(() => {
      component.hidden = false;
      component.countNotification = 12;
      fixture.detectChanges();
    });

    it('should return ngOnChanges when valid', () =>{
      // arrange
      component.ngOnChanges();
      // act
      // assert
      expect(component.hidden).toEqual(false);
    });

    it('should return ngOnChanges when invalid', () =>{
      // arrange
      component.countNotification = undefined;
      component.ngOnChanges();
      // act
      // assert
      expect(component.hidden).toEqual(true);
    });
  })

  describe('toggleBadgeVisibility', () =>{
    it('should return success', () =>{
      // arrange
      const expected ='/notification';
      fixture.detectChanges();
      // act
      const spy =jest.spyOn(component.emitNotificationClick,'emit');
      const element = fixture.debugElement.nativeElement.querySelector("mat-icon");
      element.click();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  })
});

