import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../person';
import { PersonService } from '../person.service';

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

    updatePerson(person: Person) {
        console.log("Inside updatePerson method:" + person.id);
        this.router.navigate(['person/update', person.id]);
    }

    deletePerson(person: Person) {
        console.log("Inside deletePerson method:" + person.id);
        this.personService.deletePerson(person.id)
            .subscribe((msg) => { console.log('Person Deleted:' + msg) });
        this.getAllPersons();
    }

}