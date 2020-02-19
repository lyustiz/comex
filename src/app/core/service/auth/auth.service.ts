import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(public fireAuth: AngularFireAuth,
              public router: Router,
              public ngZone: NgZone) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('item'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }

    });
  }

  logIn(email, password) {

    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      this.ngZone.run( () => {
        console.log('login correcto redirigiendo');
        this.router.navigate(['home']);
      });
      this.setUserData(result.user);
    })
    .catch( error => {
      console.log('fallo en login');
      window. alert(error.message);
    });
  }

  logOut() {

    return this.fireAuth.auth.signOut()
    .then(result => {
      console.log(result);
      localStorage.removeItem('user');
      this.router.navigate(['auth/login']);
    });
  }

  setUserData(user) {
    console.log(user, 'usuario autenticado bitacora DB');
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
}

