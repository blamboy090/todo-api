import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodosViewComponent } from './todos-view/todos-view.component';
import { TodosComponent } from './todos/todos.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'detail/:id', component: TodoDetailsComponent },
  { path: '', component: TodosComponent },
  { path: 'view', component: TodosViewComponent },
  { path: 'edit/:id', component: TodoEditComponent },
  { path: 'user/:id', component: UserViewComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
