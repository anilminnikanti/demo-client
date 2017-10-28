import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { AddPersonComponent } from './person/person-add/person.add.component';
import { ListPersonsComponent } from './person/person-list/person.list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'person', component: ListPersonsComponent, canActivate: [AuthService] },//, canActivate: [AuthService]
    { path: 'person/add', component: AddPersonComponent, canActivate: [AuthService] },
    { path: 'person/update/:id', component: AddPersonComponent, canActivate: [AuthService] },
    { path: 'todo', component: TodoListComponent, canActivate: [AuthService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
