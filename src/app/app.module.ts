import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { ListPersonsComponent } from './person-list/person.list.component';
import { AddPersonComponent } from './person-add/person.add.component';

import { PersonService } from './person/person.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
