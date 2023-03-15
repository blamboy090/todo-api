import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Location } from '@angular/common';
import { tap } from 'rxjs';
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
  timeElapsed = 0;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  // @Input() todo?: Todo;
  ngOnInit(): void {
    this.getTodo();
    // this.calculate();
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
    // this.todo?.created ? !null

    const d1: any = new Date(this.convertCurrentDate);

    const d2: any = new Date(x?.created);
    var diff = d1 - d2;
    if (diff > 60e3) console.log(Math.floor(diff / 60e3), 'minutes ago');
    else console.log(Math.floor(diff / 1e3), 'seconds ago');
    // call function to format
    this.timeElapsed = Math.floor(diff / 3.6e6);
    // this.timeElapsed = this.toHoursAndMinutes(diff);
    console.log(this.timeElapsed);
  }

  // toHoursAndMinutes(diff: number) {
  //   const totalMinutes = Math.floor(diff / 60);

  //   const seconds = diff % 60;
  //   const hours = Math.floor(totalMinutes / 60);
  //   const minutes = totalMinutes % 60;

  //   return { h: hours, m: minutes, s: seconds };
  // }
}
