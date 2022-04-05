import { Component, Input, OnInit } from '@angular/core';
import type { LabelInterface } from '../../../store/models/label.i';

@Component({
  selector: 'brc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  @Input() label: LabelInterface;
  constructor() { }

  // ngOnInit(): void {
  // }
}
