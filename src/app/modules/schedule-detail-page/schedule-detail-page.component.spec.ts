import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailPageComponent } from './schedule-detail-page.component';

describe('ScheduleDetailPageComponent', () => {
  let component: ScheduleDetailPageComponent;
  let fixture: ComponentFixture<ScheduleDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
