import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Category } from '../../../store/models/category.i';

@Component({
  selector: 'brc-select-multiple-search',
  templateUrl: './select-multiple-search.component.html',
  styleUrls: ['./select-multiple-search.component.scss'],
})
export class SelectMultipleSearchComponent implements OnInit {

  @Output() outputSelected = new EventEmitter();
  @Input() values: Category[];
  @Input() label: string;
  @Input() selected = [];
  oldSelected = [];
  @Input() placeholder = 'Search';
  @Input() notFound = 'Not Found';
  public CHOOSE_ALL = 'Choose All';
  public labelSelected = '';
  public chooseAll = false;
  public search = false;
  public select;
  public arr = [];
  @Input() valuesSearch: Category[];
  @Input() searchText: string = '';

  @ViewChild('searchSelectInput', { read: ElementRef }) searchSelectInput: ElementRef;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.search = false;
  }

  onSelectionChange() {
    // if (
    //   (this.selected[0] != this.CHOOSE_ALL && this.chooseAll) ||
    //   (this.selected[0] == this.CHOOSE_ALL && !this.chooseAll)
    // ) {
    //   return;
    // }

    // if (this.chooseAll) {
    //   this.chooseAll = !this.chooseAll;
    //   this.selected = this.selected.splice(1, this.selected.length - 1);
    //   this.outputSelected.emit(this.oldSelected);
    // } else {
    //   if (this.selected.length == this.values.length) {
    //     this.chooseAll = !this.chooseAll;
    //     this.selected.push(this.CHOOSE_ALL);
    //     this.selected = this.selected.splice(0, this.selected.length);
    //   }
    //   //this.outputSelected.emit(this.oldSelected);
    // }
    if (!this.search) {
      this.oldSelected = [];
      this.oldSelected = this.oldSelected.concat(this.selected);
    }
    else {
      this.valuesSearch.forEach(item => {
        for (let i = 0; i < this.oldSelected.length; i++) {
          if (item.categoryId == this.oldSelected[i]) {
            this.oldSelected.splice(i, 1);
          }
        }
      })
      this.oldSelected = this.oldSelected.concat(this.selected);
    }
    this.outputSelected.emit(this.oldSelected);
    this.selected = this.oldSelected;
    this.getLableSelected();

  }

  // allSelected() {
  //   this.chooseAll = !this.chooseAll;
  //   if (this.chooseAll) {
  //     this.selected = this.values.map(item => item.categoryId);
  //     this.oldSelected = this.values.map(item => item.categoryId);
  //     this.outputSelected.emit(this.selected);
  //     this.selected.push(this.CHOOSE_ALL);
  //   } else {
  //     this.selected = [];
  //     this.oldSelected = [];
  //     this.outputSelected.emit(this.selected);
  //   }
  //   this.getLableSelected();
  // }

  getLableSelected() {
    if (this.selected.length > 0) {
      if (this.selected[this.selected.length - 1] == this.CHOOSE_ALL) {
        this.labelSelected = this.CHOOSE_ALL;
        return;
      }
      let item = this.values.find(item => {
        if (item.categoryId == this.selected[0]) {
          return item;
        }
      })
      this.labelSelected = item ? item.categoryName : '';
    }
  }

  onInputChange(data) {
    this.search = true;
    this.valuesSearch = [];
    this.values.filter(item => {
      if (item.categoryName.toLowerCase().indexOf(data.toLowerCase()) > -1) {
        this.valuesSearch.push(item);
      }
    })
    if (!data) {
      this.search = false;
    }

  }

  public _focus() {
    // if (!this.searchSelectInput) {
    //   return;
    // }
    // save and restore scrollTop of panel, since it will be reset by focus()
    // note: this is hacky
    // focus
    this.searchSelectInput.nativeElement.focus();
  }

  _reset(focus?: boolean) {
    // if (!this.searchSelectInput) {
    //   return;
    // }
    this.searchSelectInput.nativeElement.value = "";
    this.onInputChange('')
    if (focus) {
      this._focus();
    }
  }

  openedChange(opened: boolean) {
    if (opened) {
      // focus the search field when opening
      this._focus();
    } else {
      // clear it when closing
      this._reset();
    }
  }
  clear(){
    this.selected = [];
  }
}
