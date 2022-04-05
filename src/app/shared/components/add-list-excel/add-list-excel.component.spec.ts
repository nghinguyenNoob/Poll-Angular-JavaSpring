import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListExcelComponent } from './add-list-excel.component';

describe('ListDetailExcelComponent', () => {
  let component: AddListExcelComponent;
  let fixture: ComponentFixture<AddListExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListExcelComponent ],
      imports: [ CommonModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListExcelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
