import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { Category } from '../../../store/models/category.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';

@Component({
  selector: 'brc-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

  @Output() outputSelected = new EventEmitter();
  @Input() values: Category[];
  @Input() label: string;
  @Input() selected = [];
  public CHOOSE_ALL = 'Choose All';
  public labelSelected = '';
  public chooseAll = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange() {
    if (
      (this.selected[0] != this.CHOOSE_ALL && this.chooseAll) ||
      (this.selected[0] == this.CHOOSE_ALL && !this.chooseAll)
    ) { return; }

    if (this.chooseAll) {
      this.chooseAll = !this.chooseAll;
      this.selected = this.selected.splice(1, this.selected.length - 1);
      this.outputSelected.emit(this.selected);
    } else {
      if (this.selected.length == this.values.length) {
        this.chooseAll = !this.chooseAll;
        this.selected.push(this.CHOOSE_ALL);
        this.selected = this.selected.splice(0, this.selected.length);
      }
      this.outputSelected.emit(this.selected);
    }
    this.getLableSelected();
  }

  allSelected() {
    this.chooseAll = !this.chooseAll;
    if (this.chooseAll) {
      this.selected = this.values.map(item => item.categoryId);
      this.outputSelected.emit(this.selected);
      this.selected.push(this.CHOOSE_ALL);
    } else {
      this.selected = [];
      this.outputSelected.emit(this.selected);
    }
    this.getLableSelected();
  }

  getLableSelected() {
    if (this.selected) {
      if (this.selected[this.selected.length - 1] == this.CHOOSE_ALL) {
        this.labelSelected = this.CHOOSE_ALL;
        return;
      }
      let item = this.values.find(item => {
        if (item.categoryId == this.selected[0]) {
          return item;
        }
      })
      return this.labelSelected = item ? item.categoryName : '';
    }
  }
  clear(){
    this.selected = [];
  }
}
