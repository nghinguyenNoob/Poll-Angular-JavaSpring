import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollMainPopupComponent } from './poll-main-popup.component';

describe('PollMainPopupComponent', () => {
  let component: PollMainPopupComponent;
  let fixture: ComponentFixture<PollMainPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollMainPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollMainPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
