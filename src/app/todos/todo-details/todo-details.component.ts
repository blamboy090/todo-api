import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent {
  todos: Todo[] = [];
  currentDate = new Date();
  convertCurrentDate = this.currentDate.toISOString();
  todo?: Todo;
  timeElapsed = '';
  currentTodo = {};

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService
      .getTodo(id)
      .pipe(
        tap((x) => console.log(x)),
        tap((x) => this.calc(x))
      )
      .subscribe((todo) => (this.todo = todo));
  }

  goBack(): void {
    this.location.back();
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }

  calc(x: Todo) {
    const d1: any = new Date(this.convertCurrentDate);

    const d2: any = new Date(x?.created);
    var diff = d1 - d2;
    this.toReadableTime(diff);
  }

  toReadableTime(diff: number) {
    if (diff < 3.6e6) {
      this.timeElapsed = Math.floor(diff / 60e3).toString() + ' minute(s)';
    } else if (diff < 8.64e7) {
      this.timeElapsed = Math.floor(diff / 3.6e6).toString() + ' hour(s)';
    } else {
      this.timeElapsed = Math.floor(diff / 8.64e7).toString() + ' day(s)';
    }
  }
}
