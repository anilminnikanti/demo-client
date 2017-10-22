import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AddPersonComponent } from './person/person-add/person.add.component';
import { ListPersonsComponent } from './person/person-list/person.list.component';
import { PersonService } from './person/person.service';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    AddPersonComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PersonService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
