import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatOption } from '@angular/material/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Category } from 'src/app/store/models/category.i';
import { __await } from 'tslib';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { SelectMultipleComponent } from './select-multiple.component';

describe('SelectMultipleComponent', () => {
  let component: SelectMultipleComponent;
  let fixture: ComponentFixture<SelectMultipleComponent>;
  let label: HTMLElement;
  let selectedOption: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMultipleComponent],
      imports: [CommonModule, MaterialCustomModule, ScrollingModule, BrowserAnimationsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("check input", () => {
    it("should render values", () => {
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ];
      component.label = "label";
      component.selected = [1, 5];
      const matSelect = fixture.nativeElement.querySelector('mat-select');
      matSelect.click();
      fixture.detectChanges();
      label = fixture.nativeElement.querySelector('mat-label');

      fixture.whenStable().then(() => {
        const matOption = fixture.debugElement.queryAll(By.css('.mat-option-text'));
        for (var i = 1; i < component.values.length; i++) {
          expect(matOption[i].nativeElement.textContent.trim()).toEqual(component.values[i - 1].categoryName);
        }
      });
      expect(label.textContent.trim()).toEqual(component.label)
    });
  });

  describe("onSelectionChange", () => {
    it("return undefined when selected 0 is not Choose All and chooseAll is true", () => {
      component.chooseAll = true;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ];
      component.selected = [1, 2]
      expect(component.onSelectionChange()).toEqual(undefined);
    });
    it("return undefined when selected 0 is Choose All and chooseAll is false", () => {
      component.chooseAll = false;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ];
      component.selected = ["Choose All"]
      expect(component.onSelectionChange()).toEqual(undefined);
    });
    it("chooseAll is true", () => {
      component.chooseAll = true;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ];
      component.selected = ["Choose All", 1, 5];
      const spy = spyOn(component.outputSelected, "emit");
      component.onSelectionChange();
      expect(spy).toHaveBeenCalledWith(component.selected);
      expect(component.chooseAll).toEqual(false);
      expect(component.selected).toEqual([1, 5]);
    });
    it("chooseAll is false", () => {
      component.chooseAll = false;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
      ];
      component.selected = [1, 2, 3];
      component.onSelectionChange();
      expect(component.chooseAll).toEqual(true);
      expect(component.selected).toEqual([1, 2, 3, "Choose All"]);
    });
    it("chooseAll is false and length of selected != length of values", () => {
      component.chooseAll = false;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
      ];
      component.selected = [1, 2];
      component.onSelectionChange();
    });
  });

  describe("allSelected", () => {
    it("chooseAll is true", () => {
      component.chooseAll = false;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ];
      const spy = spyOn(component.outputSelected, "emit");
      component.allSelected();
      expect(spy).toHaveBeenCalledWith(component.selected);
      expect(component.selected[component.values.length]).toEqual("Choose All");
    });
    it("chooseAll is false", () => {
      component.chooseAll = true;
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ];
      component.selected = [5];
      const spy = spyOn(component.outputSelected, "emit");
      component.allSelected();
      expect(spy).toHaveBeenCalledWith([]);
      expect(component.selected.length).toEqual(0);
    });
  });

  describe("getLableSelected", () => {
    it("return undefined when selected = Choose All", () => {
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ],
        component.selected = ["Choose All"];
      component.label = 'label';
      expect(component.getLableSelected()).toEqual(undefined);
    });
    it("return item when selected is not undefined", () => {
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ],
        component.selected = [5];
      component.label = 'label';
      expect(component.getLableSelected()).toEqual(component.values[4].categoryName);
    });
    it("return item when selected is not undefined and list values don't contain selected", () => {
      component.values = [
        { categoryName: 'Python', categoryId: 1 },
        { categoryName: 'React', categoryId: 2 },
        { categoryName: 'PHP', categoryId: 3 },
        { categoryName: 'Laravel', categoryId: 4 },
        { categoryName: 'NestJS', categoryId: 5 },
        { categoryName: 'Spring Boot', categoryId: 6 },
        { categoryName: 'Java', categoryId: 7 },
        { categoryName: 'Ruby', categoryId: 8 },
      ],
        component.selected = [15];
      component.label = 'label';
      expect(component.getLableSelected()).toEqual('');
    });
    it("selected is empty", () => {
      component.selected = undefined;
      expect(component.getLableSelected()).toEqual(undefined);
    });
  });

  describe("clear", () => {
    it("should clear data", () => {
      component.selected = [1, 2];
      component.clear();
      expect(component.selected).toEqual([]);
    });
  });
});
