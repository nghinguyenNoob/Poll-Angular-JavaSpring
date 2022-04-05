import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollListPageComponent } from './poll-list-page.component';

describe('PollListPageComponent', () => {
  let component: PollListPageComponent;
  let fixture: ComponentFixture<PollListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
