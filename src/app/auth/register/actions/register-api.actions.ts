import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user.model';

export const registerSuccess = createAction(
  '[Register/API] Register Success',
  props<{ user: User }>()
);

export const registerFailure = createAction(
  '[Register/API] Register Failure',
  props<{ error: any }>()
);

export const registerRedirect = createAction(
  '[Register/API] Register Redirect'
);
