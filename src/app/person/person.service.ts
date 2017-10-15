import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PersonService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = '/demo/persons/';

    constructor(private http: Http) { }

    addPerson(person: Person): Promise<Person> {
        console.log("PersonService - Inside addPerson method");
        return this.http
            .post(this.baseUrl + "/addPerson", JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Person)
            .catch(this.handleError);
    }

    getPersons(): Promise<Person[]> {
        console.log("PersonService - Inside PersonService getPersons method");
        return this.http.get(this.baseUrl + "findAllPersons")
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}