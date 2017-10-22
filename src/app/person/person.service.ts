import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Person } from './person';

@Injectable()
export class PersonService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = '/demo/person/';

    constructor(private http: Http) { }

    addPerson(person: Person): Promise<Person> {
        console.log("PersonService - Inside addPerson method");
        return this.http
            .post(this.baseUrl + "addPerson", JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Person)
            .catch(this.handleError);
    }

    deletePerson(personId: number): Observable<String> {
        var url = this.baseUrl + `deletePerson?personId=${personId}`;
        console.log("PersonService - Inside deletePerson method");
        console.log(url)
        return this.http.delete(url)
            .map(response => response.toString() as String);
    }

    getPerson(personId: number): Observable<Person> {
        var url = this.baseUrl + `getPerson?personId=${personId}`;
        console.log("PersonService - Inside getPerson method");
        console.log(url);
        return this.http.get(url)
            .map(response => {
                console.log(response.json());
                return response.json() as Person;
            });
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
