export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
  secret: string;
  details: string;
  created: string;
  difficulty: number;
  userId: number;
}

export interface Difficulty {
  value: number;
  viewValue: string;
}

export interface User {
  id: number;
  userName: string;
  todoItems: Todo[];
}
