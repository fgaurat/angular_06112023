import { Component, ViewChild } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';
import { BusService } from 'src/app/services/bus.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {



  constructor(private todoService:TodosService,private bus:BusService){

  }
  todoFormModel:Todo={
    title:"",
    completed:false
  }


  save(){
    this.bus.dispatch({
      type:"NEW_TODO",
      payload:this.todoFormModel
    })
    // this.todoService.save(this.todoFormModel).subscribe(_=>this.bus.dispatch({
    //   type:"NEW_TODO"
    // }))
    
  }

}
