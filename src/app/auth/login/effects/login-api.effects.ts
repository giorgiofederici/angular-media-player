import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LoginApiActions } from '../actions';

@Injectable()
export class LoginApiEffects {
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginApiActions.loginSuccess),
        tap(() => this.router.navigate(['/books']))
      ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginApiActions.loginRedirect),
        tap(authed => {
          this.router.navigate(['/auth/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
