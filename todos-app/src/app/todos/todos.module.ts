import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { MaterialModule } from '../material.module';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ],
})
export class TodosModule { }
