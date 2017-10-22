import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = '/demo/todo/';

  constructor(private http: Http) { }

  getAllTodo(): Promise<Todo[]> {
    return this.http.get(this.baseUrl + "getAllToDo")
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
