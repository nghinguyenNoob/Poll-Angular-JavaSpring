import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Category } from 'src/app/store/models/category.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { SelectMultipleSearchComponent } from './select-multiple-search.component';

describe('SelectMultipleSearchComponent', () => {
  let component: SelectMultipleSearchComponent;
  let fixture: ComponentFixture<SelectMultipleSearchComponent>;

  let dataValue: Category[] = [
    { categoryId: 1, categoryName: 'Python' },
    { categoryId: 2, categoryName: 'React' },
    { categoryId: 3, categoryName: 'PHP' },
    { categoryId: 4, categoryName: 'Laravel' },
    { categoryId: 5, categoryName: 'NestJS' },
    { categoryId: 6, categoryName: 'Spring Boot' },
    { categoryId: 7, categoryName: 'Java' },
    { categoryId: 8, categoryName: 'Ruby' },
  ];
  let valuesSearch: Category[] = [
    { categoryId: 1, categoryName: 'Python' },
    { categoryId: 2, categoryName: 'React' },
  ];
  let matLabel: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMultipleSearchComponent],
      imports: [
        CommonModule,
        MaterialCustomModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("onSelectionChange", () => {
    it("search is false", () => {
      component.search = false;
      component.selected = [1, 'Choose All'];
      component.oldSelected = [1, 5]
      component.valuesSearch = valuesSearch;
      component.values = dataValue;
      component.onSelectionChange()
      expect(component.labelSelected ).toEqual('Choose All'); 
      expect(component.onSelectionChange()).toBeUndefined();
    });
    it("search is true", () => {
      component.search = true;
      component.selected = [1, 3];
      component.oldSelected = [1, 5]
      component.valuesSearch = valuesSearch;
      component.values = dataValue;
      component.onSelectionChange()
      expect(component.oldSelected).toEqual([5, 1, 3]); 
      expect(component.labelSelected).toEqual("NestJS");
    });
    it("search is false and selected is null", () => {
      component.search = false;
      component.selected = null;
      component.oldSelected = [1, 5]
      component.valuesSearch = valuesSearch;
      component.values = dataValue;
      component.onSelectionChange()
      expect(component.labelSelected).toEqual("");     
    });
    it("search is false and selected is empty", () => {
      component.search = false;
      component.oldSelected = [1, 5]
      component.valuesSearch = valuesSearch;
      component.values = dataValue;
      expect(component.onSelectionChange()).toBeUndefined();     
    });
  });

  describe("openedChange", () => {
    it("should focus the search field when opening", () => {
      const opened = true;
      component.searchSelectInput.nativeElement.value = "haha";
      expect(component.openedChange(opened)).toEqual(undefined);
    });
    it("should clear data when closing", () => {
      const opened = false;
      component.values = dataValue;
      component.valuesSearch = valuesSearch;
      fixture.detectChanges();
      expect(component.openedChange(opened)).toEqual(undefined);
    });
    it("should clear data when closing and categoryName of value != input", () => {
      const opened = false;
      component.values = dataValue;
      component.searchText = "Python";
      fixture.detectChanges();
      expect(component.onInputChange("Python")).toEqual(undefined);
    });
  });
  
  describe("_reset", () => {
    it("should clear data when closing and focus is true", () => {
      let focus = true;
      component.values = dataValue;
      component.valuesSearch = valuesSearch;
      component._reset(focus);
    });
  });

  describe("clear", () => {
    it("should clear data", () => {
      component.selected = [1, 2];
      component.clear();
      expect(component.selected).toEqual([]);
    });
  });
  describe("test input", () =>{
    it("should render data label", () => {
      component.values = dataValue;
      component.label = "Select multiple search";
      component.placeholder = "Search";
      component.notFound = "Not Found";
      fixture.detectChanges();
      matLabel = fixture.nativeElement.querySelector('mat-label');
      expect(matLabel.textContent.trim()).toEqual(component.label);
    });
  });
});
