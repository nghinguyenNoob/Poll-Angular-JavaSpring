import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListExcelComponent } from './edit-list-excel.component';

describe('ListDetailExcelComponent', () => {
  let component: EditListExcelComponent;
  let fixture: ComponentFixture<EditListExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListExcelComponent ],
      imports: [ CommonModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListExcelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
