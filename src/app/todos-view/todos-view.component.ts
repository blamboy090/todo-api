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
    const userId = 1
    this.todoService.getByUser(userId).subscribe((todos) => (this.todos = todos))
    
  }

  getTodos(): void {
    // this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
    console.log("thingy")
  }
}
