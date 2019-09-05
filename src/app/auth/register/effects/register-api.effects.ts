import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { RegisterApiActions } from '../actions';

@Injectable()
export class RegisterApiEffects {
  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterApiActions.registerSuccess),
        tap(() => this.router.navigate(['/books']))
      ),
    { dispatch: false }
  );

  registerRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterApiActions.registerRedirect),
        tap(authed => {
          this.router.navigate(['/auth/register']);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
