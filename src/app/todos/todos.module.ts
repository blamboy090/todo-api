import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [TodoDetailsComponent, TodoEditComponent],
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
  ],
  exports: [TodoDetailsComponent, TodoEditComponent],
})
export class TodosModule {}
