import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { LoginPageActions, LoginApiActions } from '../actions';
import { Credentials } from '../../shared/models/credentials.model';
import { AuthService } from '../../shared/services/auth/auth.service';

@Injectable()
export class LoginPageEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map(action => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.loginUser(auth).pipe(
          map(user => LoginApiActions.loginSuccess({ user })),
          catchError(error =>
            of(LoginApiActions.loginFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
