import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../shared/models/credentials.model';

export const register = createAction(
  '[Register Page] Register',
  props<{ credentials: Credentials }>()
);
