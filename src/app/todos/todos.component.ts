import { Component, OnInit } from '@angular/core';
import { Todo, User } from '../todo';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { Difficulty } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  users: User[] = [];
  createdDate = new Date();
  dateConvert = this.createdDate.toISOString();
  selected = 0;
  selectedUser = -1;

  constructor(
    private todoService: TodoService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.getTodos();
    this.getUsers();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  add(
    name: string,
    details: string,
    created: string,
    difficulty: number,
    userId: number
  ): void {
    name = name.trim();
    details = details.trim();
    created = this.dateConvert;
    difficulty = this.selected;
    userId = Number(this.selectedUser);

    if (!name) {
      return;
    }
    this.todoService
      .addTodo({ name, details, created, difficulty, userId } as Todo)
      .subscribe((todo) => {
        this.todos.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
}
