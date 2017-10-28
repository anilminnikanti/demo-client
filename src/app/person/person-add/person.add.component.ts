import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
    selector: 'person-add',
    templateUrl: 'person.add.component.html',
    styleUrls: ['person.add.component.css'],
    providers: [PersonService]
})
export class AddPersonComponent implements OnInit {
    person = new Person();

    constructor(private personService: PersonService,
        private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log("Inside AddPersonComponent ngOnInit method");
        this.route.params.subscribe(params => {
            this.person.id = +params['id'];
        });
        console.log("Person Id:" + !isNaN(this.person.id));
        if (!isNaN(this.person.id)) {
            console.log("AddPersonComponent - getPerson with id:" + this.person.id);
            this.personService.getPerson(this.person.id)
                .subscribe((person) => { this.person = person;
                console.log("FirstName:" + this.person.firstName); });
        }
    }

    addPerson(person: Person) {
        let success: boolean;
        console.log("Inside addPerson method");
        this.personService.addPerson(this.person).then(person => 
        this.router.navigate(['person']));
    }

    cancelAdd() {
        this.router.navigate(['person']);
    }

    updatePerson(personId: number) {
        console.log("Inside updatePerson method:" + personId);
        this.personService.getPerson(personId)
            .subscribe((person) => { this.person = person; });
    }
}