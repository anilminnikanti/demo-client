import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPersonComponent } from './person/person-add/person.add.component';
import { ListPersonsComponent } from './person/person-list/person.list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/person', pathMatch: 'full' },
    { path: 'person', component: ListPersonsComponent },
    { path: 'person/add', component: AddPersonComponent },
    { path: 'person/update/:id', component: AddPersonComponent },
    { path: 'todo', component: TodoListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
