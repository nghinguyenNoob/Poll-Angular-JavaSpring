import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDetail } from '../../store/models/detail-todo';
import { TodoService } from '../../store/services/todo.service';

@Component({
  selector: 'brc-detail-todo-page',
  templateUrl: './detail-todo-page.component.html',
  styleUrls: ['./detail-todo-page.component.scss'],
})
export class DetailTodoPageComponent implements OnInit {
  public todoDetail: TodoDetail;

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    // Only for test - delete....
    // id = 1;
    this.todoService.getDetailTodo(id).subscribe((todo) => {
      this.todoDetail = {
        ...todo,
      };
    });
  }

  btnClickEmt() {
    this.router.navigate(['/todo']);
  }
}
