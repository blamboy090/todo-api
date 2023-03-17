import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Difficulty } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  createdDate = new Date();
  dateConvert = this.createdDate.toISOString();
  selected = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  add(
    name: string,
    details: string,
    created: string,
    difficulty: number
  ): void {
    name = name.trim();
    details = details.trim();
    created = this.dateConvert;
    difficulty = this.selected;

    if (!name) {
      return;
    }
    this.todoService
      .addTodo({ name, details, created, difficulty } as Todo)
      .subscribe((todo) => {
        this.todos.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
}
