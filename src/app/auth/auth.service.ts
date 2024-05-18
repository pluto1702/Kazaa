import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshtoken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcMo2LPuHCjmk5tg-QjBvTfT0nWjekjto',
        {
          email,
          password,
          returSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcMo2LPuHCjmk5tg-QjBvTfT0nWjekjto',
        {
          email,
          password,
          returSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    this.isLoggedIn = false;
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationData = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationData);
    this.user.next(user);
    this.isLoggedIn = true;
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown erorr has occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'INVALID_LOGIN_CREDENTIALS':
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid login creditials';
        break;
      case 'USER_DISABLED':
        errorMessage = 'User has been disabled';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
    }

    return throwError(errorMessage);
  }
}
