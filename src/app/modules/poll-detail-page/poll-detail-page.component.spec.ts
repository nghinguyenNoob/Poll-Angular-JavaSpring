import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDetailPageComponent } from './poll-detail-page.component';

describe('PollDetailPageComponent', () => {
  let component: PollDetailPageComponent;
  let fixture: ComponentFixture<PollDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
