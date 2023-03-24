import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodosViewComponent } from './todos-view/todos-view.component';

@NgModule({
  declarations: [TodoDetailsComponent, TodoEditComponent, TodosViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  exports: [TodoDetailsComponent, TodoEditComponent, TodosViewComponent],
})
export class TodosModule {}
