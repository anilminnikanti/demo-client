import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService implements CanActivate {

  public isLoggedIn: Boolean = false;
  private user: User;
  private baseUrl = '/demo/user/';

  constructor(private router: Router, private http: Http) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("AuthService: canActivate Method - " + this.isLoggedIn + " - " + state.url);
    if (this.isLoggedIn) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  login(id: number, password: string): Observable<boolean> {
    console.log("AuthService - Http call for user validation");
    let url = this.baseUrl + "authUser/" + id + "/" + password;
    console.log(url);
    return this.http.get(url)
      .map(response => {
        console.log(response.json());
        this.user = response.json() as User;

        if (this.user.id > 0) {
          this.isLoggedIn = true;
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

}
