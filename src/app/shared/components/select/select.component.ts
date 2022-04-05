import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { LabelledValue } from '../../../store/models/labelvalue.i';

@Component({
  selector: 'brc-app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

  lengthData: boolean = false;

  //input
  @Input() default: string = '';
  @Input() data: LabelledValue<string>[] = [];
  @Input() label: string;
  @Input() scrollLength = 5;
  //output
  @Output() getValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    if(this.data != null){
      this.lengthData = this.data.length < this.scrollLength;
    }
  }
  onSelectionChange(value: string) {
    this.getValue.emit(value);
  }

  clear() {
    this.default = '';
  }
}
