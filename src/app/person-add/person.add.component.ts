import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PersonService } from '../person/person.service';

import { Person } from '../person/person';

@Component({
    selector: 'person-add',
    templateUrl: 'person.add.component.html',
    styleUrls: ['person.add.component.css'],
    providers: [PersonService]
})
export class AddPersonComponent {
    person = new Person();

    constructor(private personService: PersonService,
        private router: Router) { }

    onSubmit() {
        this.personService.addPerson(this.person);
        this.router.navigate(['person']);
    }

    cancelAdd() {
        this.router.navigate(['person']);
    }
}