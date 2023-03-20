import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosUrl = 'https://localhost:7268/api/todoitems';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET: todos from the server */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

    /** GET: todos from the server */
  getByUser(userId: number): Observable<Todo[]> {
      const url = `${this.todosUrl}/userId/${userId}`;
      return this.http.get<Todo[]>(url);
    }

  /** GET: todo by id */
  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  /** POST: add a new todo to server */
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions);
  }

  /**PUT: update a todo */
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      this.todosUrl + `/${todo.id}`,
      todo,
      this.httpOptions
    );
  }

  /** DELETE: delete todo from the server */
  deleteTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;

    return this.http.delete<Todo>(url, this.httpOptions);
  }
}
