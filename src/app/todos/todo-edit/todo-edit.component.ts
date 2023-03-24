import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../todo.service';
import { tap } from 'rxjs';
import { Todo } from '../../todo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  @Input() todo?: Todo;
  @Output() todosUpdated = new EventEmitter<Todo>();

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService
      .getTodo(id)
      .pipe(tap((x) => console.log(x)))
      .subscribe((todo) => (this.todo = todo));
  }

  update(todo: Todo) {
    this.todoService
      .updateTodo(todo)
      .subscribe((todos: Todo) => this.todosUpdated.emit(todo));
  }

  goBack(): void {
    this.location.back();
  }
}
