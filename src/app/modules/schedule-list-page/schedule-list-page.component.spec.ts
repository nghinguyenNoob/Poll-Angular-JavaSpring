import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleListPageComponent } from './schedule-list-page.component';

describe('ScheduleListPageComponent', () => {
  let component: ScheduleListPageComponent;
  let fixture: ComponentFixture<ScheduleListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
