import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user.model';

export const loginSuccess = createAction(
  '[Login/API] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Login/API] Login Failure',
  props<{ error: any }>()
);

export const loginRedirect = createAction('[Login/API] Login Redirect');
