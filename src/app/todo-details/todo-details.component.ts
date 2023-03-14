import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Location } from '@angular/common';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent {
  todos: Todo[] = [];
  currentDate = new Date();
  convertCurrentDate = this.currentDate.toISOString();
 
  

  // elapsedTime = (this.createdDate - this.convertCurrentDate)
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  @Input() todo?: Todo;
  ngOnInit(): void {
    this.getTodo();
  }

  refCreatedDate = this.todo?.created;

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe((todo) => (this.todo = todo));
  }

  goBack(): void {
    this.location.back();
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
}
