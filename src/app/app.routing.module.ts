import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPersonsComponent } from './person-list/person.list.component';
import { AddPersonComponent } from './person-add/person.add.component';

const routes: Routes = [
    { path: '', redirectTo: '/person', pathMatch: 'full' },
    { path: 'person', component: ListPersonsComponent },
    { path: 'person/add', component: AddPersonComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
