import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodoPageComponent } from './detail-todo-page.component';

describe('DetaiTodoPageComponent', () => {
  let component: DetailTodoPageComponent;
  let fixture: ComponentFixture<DetailTodoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTodoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
