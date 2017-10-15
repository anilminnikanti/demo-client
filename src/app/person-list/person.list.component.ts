import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../person/person.service';

import { Person } from '../person/person';

@Component({
    selector: 'person-list',
    templateUrl: 'person.list.component.html',
    styleUrls: ['person.list.component.css'],
    providers: [PersonService]
})
export class ListPersonsComponent implements OnInit {
    persons: Person[];

    constructor(private personService: PersonService,
        private router: Router) { }

    addPerson() {
        console.log("Inside addPerson method");
        this.router.navigate(['person/add']);
    }

    getAllPersons() {
        this.personService.getPersons()
            .then(persons => this.persons = persons);
    }

    ngOnInit(): void {
        console.log("Inside ListPersonsComponent ngOnInit method");
        this.getAllPersons();
    }

}