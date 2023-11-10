import { HttpClient } from '@angular/common/http';
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { EMPTY, Observable, switchMap, tap, filter, merge } from 'rxjs';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusService } from 'src/app/services/bus.service';
import { Action } from 'src/app/models/action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit,AfterViewInit {
  displayedColumns = [
    'todoId',
    'todoUserId',
    'todoTitle',
    'todoCompleted',
    'todoCBCompleted',
    'todoAction',
  ];
  todos$: Observable<Todo[]> = EMPTY;

  constructor(
    private todoService: TodosService,
    private _snackBar: MatSnackBar,
    private bus: BusService
  ) {}
  
  ngAfterViewInit(): void {
    this.bus.dispatch({'type':'LOAD_TODO'})
  }

  ngOnInit(): void {
    const new$ = this.bus.bus$.pipe(
      filter((action) => action.type === 'NEW_TODO'),
      switchMap((action) => this.todoService.save(action.payload as Todo)),
     
    );
    
    const delete$ = this.bus.bus$.pipe(
      filter((action) => action.type === 'DELETE_TODO'),
      switchMap((action) => this.todoService.delete(action.payload as Todo)),
      tap((_) =>
        this._snackBar.open('OK !', 'close', {
          duration: 2000,
        })
      ) 
    );
    
    const load$ = this.bus.bus$.pipe(
      filter((action) => action.type === 'LOAD_TODO')
    );

    this.todos$ = merge(new$, delete$, load$).pipe(
      switchMap((action) => this.todoService.getAll())
    );

    // this.todos$ = this.todoService.getAll();
    // this.bus.bus$.subscribe((action: Action) => {
    //   console.log('TodoListComponent', action);
    //   this.todos$ = this.todoService.getAll();
    // });

    
  }

  delete(todo: Todo) {
    this.bus.dispatch({'type':'DELETE_TODO',payload:todo})
    // this.todoService.delete(todo).subscribe(
    // _ => this.todos$ = this.todoService.getAll()
    // )

    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap((_) => this.todoService.getAll()),

    // );
  }
}
