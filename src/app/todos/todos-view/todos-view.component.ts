import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo, User } from '../../todo';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.scss'],
})
export class TodosViewComponent implements OnInit {
  @Output() todosUpdated = new EventEmitter<Todo>();
  users: User[] = [];
  todos: Todo[] = [];
  dataSource = this.todos;
  displayedColumns: string[] = [
    'userId',
    'name',
    'isComplete',
    'difficulty',
    'created',
  ];

  constructor(
    private todoService: TodoService,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodos();
    //this.getUsers();
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

  goBack(): void {
    this.location.back();
  }
}
