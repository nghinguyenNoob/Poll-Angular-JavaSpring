import type { MenuItem } from './../../../store/models/menu-item.i';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'brc-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tab: MenuItem;
  @Output() emitLink : EventEmitter<string> =  new EventEmitter<string>();
  navigate(data :string){
    this.emitLink.emit(data);
  }
}
