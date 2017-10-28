import { Login } from './login';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = new Login();

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    console.log("LoginComponent: loginUser method");
    this.authService.login(this.login.userId, this.login.password)
      .subscribe((isValid) => {
        console.log('Person Deleted:' + isValid);
        if (isValid) {
          console.log("LoginComponent - returning from loginUser method");
          this.route.navigate(['person']);
        }
      });
  }

}
