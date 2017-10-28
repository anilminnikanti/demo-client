import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];

  constructor(private todoService: TodoService,
    private route: Router) {

  }

  ngOnInit() {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAllTodo().then(todos => this.todos = todos);
  }

}
