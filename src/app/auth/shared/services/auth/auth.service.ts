import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { Credentials } from '../../models/credentials.model';

@Injectable()
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  get user() {
    return this.af.auth.currentUser;
  }

  get authState() {
    return this.af.authState;
  }

  createUser(credentials: Credentials): Observable<User> {
    const { email, password } = credentials;
    return from(
      this.af.auth.createUserWithEmailAndPassword(email, password)
    ).pipe(
      map(response => {
        if (!response || !response.user) {
          return null;
        }
        return {
          email: response.user.email,
          uid: response.user.uid,
          authenticated: true
        };
      })
    );
  }

  loginUser(credentials: Credentials) {
    const { email, password } = credentials;
    return from(this.af.auth.signInWithEmailAndPassword(email, password)).pipe(
      map(response => {
        console.log('qui');
        if (!response || !response.user) {
          return null;
        }
        return {
          email: response.user.email,
          uid: response.user.uid,
          authenticated: true
        };
      })
    );
  }

  logoutUser() {
    return this.af.auth.signOut();
  }
}
