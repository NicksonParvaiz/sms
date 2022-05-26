import { AuthService } from './../../../Services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  loginForm: FormGroup;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'userName': new FormControl(''),
      'password': new FormControl('')

    });
  }

  logingIn() {

    let res = this.auth.users.find(
      x =>
        x.username == this.loginForm.value.userName &&
        x.password == this.loginForm.value.password
    )


    if (res) {
      this.auth.loginUser = res;
      this.auth.login();
    }
    else {
      this.auth.logout();
    }

    console.log(this.auth.loggedIn);
    let redirectTo: string;
    switch (this.auth.loginUser.role) {
      case 'admin':
        redirectTo = 'admin';
        break;

      case 'faculty':
        redirectTo = 'faculty';
        break;

      case 'student':
        redirectTo = 'student';
        break;
    }

    this.router.navigateByUrl(redirectTo);
  }


}
