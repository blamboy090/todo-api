export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
  secret: string;
  details: string;
  created: string;
  difficulty: number;
}

export interface Difficulty {
  value: number;
  viewValue: string;
}
