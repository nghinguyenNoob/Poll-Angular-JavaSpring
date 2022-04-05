import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTemplateDetailPageComponent } from './excel-template-detail-page.component';

describe('ScheduleListPageComponent', () => {
  let component: ExcelTemplateDetailPageComponent;
  let fixture: ComponentFixture<ExcelTemplateDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelTemplateDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTemplateDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
