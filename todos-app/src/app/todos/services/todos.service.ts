import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };



  constructor(private http:HttpClient) { }

  getAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.urlTodos)

  }

  delete(todo:Todo):Observable<any>{
      const url = `${environment.urlTodos}/${todo.id}`
      return this.http.delete(url)
  }


  save(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.urlTodos, todo, this.httpOptions)
  }
}
