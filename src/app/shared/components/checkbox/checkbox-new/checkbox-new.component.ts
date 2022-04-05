import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxInterface } from '../../../../store/models/checkbox-item.i';

@Component({
  selector: 'brc-checkbox-new',
  templateUrl: './checkbox-new.component.html',
  styleUrls: ['./checkbox-new.component.scss']
})
export class CheckboxNewComponent implements OnInit {

  checkboxValue : CheckboxInterface [];
  @Input() nameGroup: string = 'Status'
  @Input() checkboxContent : CheckboxInterface[] = [
    {name : "Complete", checked : false},
    {name : "Incomplete", checked : false},
  ]
  @Output() dataCheckBox = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
    this.checkboxValue = this.checkboxContent;

  }

  onChange(data : boolean,index : number) {
    this.checkboxValue[index].checked = data;
    this.dataCheckBox.emit(this.checkboxValue);
  }
  clear(){
    this.checkboxContent?.forEach(item =>
      item.checked = false
    )
  }
}
