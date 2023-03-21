import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { Todo, User } from '../todo';

@Component({
  selector: 'app-todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.scss'],
})
export class TodosViewComponent implements OnInit {
  users: User[] = [];
  todos: Todo[] = [];
  dataSource = this.todos;
  displayedColumns: string[] = ['userId','name', 'isComplete', 'difficulty', 'created'];

  constructor(
    private todoService: TodoService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getTodos();
    this.getUsers();
    // const userId = 1;
    // this.todoService
    //   .getByUser(userId)
    //   .subscribe((todos) => (this.todos = todos));
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));    
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
