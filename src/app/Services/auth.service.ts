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

  loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem('isLoggedIn')));
        }, 0);
      }
    )
    return promise;
  }


  login() {
    localStorage.setItem('isLoggedIn' , JSON.stringify(true))
  }

  logout() {
    localStorage.setItem('isLoggedIn' , JSON.stringify(false))

  }



}
