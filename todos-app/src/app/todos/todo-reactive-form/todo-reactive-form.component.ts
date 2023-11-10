import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { BusService } from 'src/app/services/bus.service';
import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {
  todoForm = this.fb.group({
    title: ['',Validators.required],
    completed: [false],

  });

  constructor(private fb:FormBuilder,private bus:BusService){}

  save(){
    console.log(this.todoForm.value)
    this.bus.dispatch({type:'NEW_TODO',payload:this.todoForm.value})
  }

}
