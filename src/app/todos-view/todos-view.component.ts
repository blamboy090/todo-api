import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.scss'],
})
export class TodosViewComponent implements OnInit {
  todos: Todo[] = [];
  dataSource = this.todos;
  displayedColumns: string[] = ['name', 'isComplete', 'difficulty', 'created'];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
}
