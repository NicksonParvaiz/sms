import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users = [
    { username: 'nick', password: 'nick', role: 'student' },
    { username: 'sana', password: 'sana', role: 'faculty' },
    { username: 'admin', password: 'admin', role: 'admin' },
  ]


  loginUser: {
    username: string, password: string, role: string
  };

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 0);
      }
    )
    return promise;
  }


  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }



}
