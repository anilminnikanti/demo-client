import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PersonService } from '../person/person.service';

import { Person } from '../person/person';

@Component({
    selector: 'person-list',
    templateUrl: 'person.list.component.html',
    styleUrls: ['person.list.component.css'],
    providers: [PersonService]
})
export class ListPersonsComponent implements OnInit {
    //persons: Observable<Person[]>;
    persons: Person[];

    constructor(private personService: PersonService,
        private router: Router) { }

    ngOnInit(): void {
        console.log("Inside ListPersonsComponent ngOnInit method");
        this.getAllPersons();
    }

    addPerson() {
        console.log("Inside addPerson method");
        this.router.navigate(['person/add']);
    }

    getAllPersons() {
        this.personService.getPersons().then(persons => this.persons = persons);
    }

    updatePerson(personId: number) {
        console.log("Inside updatePerson method");
        this.router.navigate(['person/update']);
    }

    deletePerson(person: Person) {
        console.log("Inside deletePerson method");
        this.personService.deletePerson(person.id)
            .subscribe((booleanVal) => { console.log('Person Deleted:' + booleanVal) });
        this.getAllPersons();
    }

}