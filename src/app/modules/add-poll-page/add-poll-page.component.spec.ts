import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollPageComponent } from './add-poll-page.component';

describe('AddTodoPageComponent', () => {
  let component: AddPollPageComponent;
  let fixture: ComponentFixture<AddPollPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPollPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
