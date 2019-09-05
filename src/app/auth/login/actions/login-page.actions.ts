import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../shared/models/credentials.model';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
