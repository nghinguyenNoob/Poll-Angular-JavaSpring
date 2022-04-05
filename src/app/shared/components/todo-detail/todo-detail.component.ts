import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import type { TodoDetail } from '../../../store/models/detail-todo';

@Component({
  selector: 'brc-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  // text-area
  @Input() todo: TodoDetail = {
    todoId: '',
    todoName: '',
    description: '',
    status: '',
    deadline: new Date(),
    importance: '',
    created: new Date(),
    modified: new Date(),
    todoDetailUser: {
      userId: '',
      userName: '',
      fullName: '',
    },
    todoDetailCategory: {
      todoCategoryId: '',
      todoCategoryName: '',
    },
  };
  @Output() btnClickEmt: EventEmitter<void> = new EventEmitter<void>();
  @Output() btnClickEmtStatus: EventEmitter<void> = new EventEmitter<void>();
  @Output() btnClickEmtUpdate: EventEmitter<void> = new EventEmitter<void>();
  @Output() btnClickEmtDelete: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  clickButton() {
    this.btnClickEmt.emit();
  }

  clickButtonStatus() {
    this.btnClickEmtStatus.emit();
  }

  clickButtonUpdate() {
    this.btnClickEmtUpdate.emit();
  }

  clickButtonDelete() {
    this.btnClickEmtDelete.emit();
  }
}
