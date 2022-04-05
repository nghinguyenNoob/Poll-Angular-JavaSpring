import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailExcelComponent } from './list-detail-excel.component';

describe('ListDetailExcelComponent', () => {
  let component: ListDetailExcelComponent;
  let fixture: ComponentFixture<ListDetailExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetailExcelComponent ],
      imports: [ CommonModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailExcelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
