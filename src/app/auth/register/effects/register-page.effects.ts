import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { RegisterPageActions, RegisterApiActions } from '../actions';
import { Credentials } from '../../shared/models/credentials.model';
import { AuthService } from '../../shared/services/auth/auth.service';

@Injectable()
export class RegisterPageEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterPageActions.register),
      map(action => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.createUser(auth).pipe(
          map(user => RegisterApiActions.registerSuccess({ user })),
          catchError(error =>
            of(RegisterApiActions.registerFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
