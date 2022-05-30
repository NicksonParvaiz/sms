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

    this.auth.loginUser = JSON.parse(localStorage.getItem('loginUser'));
  }

  logingIn() {

    let res = this.auth.users.find(
      x =>
        x.username == this.loginForm.value.userName &&
        x.password == this.loginForm.value.password
    )
    // let res = { username: 'nick', password: 'nick', role: 'admin' };
    localStorage.setItem('loginUser' , JSON.stringify(res));
    if (res) {
      this.auth.login();
      // this.auth.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    }
    else {
      this.auth.logout();
      alert('Incorrect Credentials !!!')
    }

    let redirectTo: string;
    switch (this.auth.loginUser.role) {
      case 'admin':
        redirectTo = 'admin/dashboard';
        break;

      case 'faculty':
        redirectTo = 'faculty/dashboard';
        break;

      case 'student':
        redirectTo = 'student/dashboard';
        break;
    }

    this.router.navigateByUrl(redirectTo);
  }


}
