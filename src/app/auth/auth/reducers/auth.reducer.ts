import { createReducer, on } from '@ngrx/store';

import { RegisterApiActions } from '../../register/actions';
import { User } from '../../shared/models/user.model';

export const statusFeatureKey = 'status';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null
};

export const reducer = createReducer(
  initialState,
  on(RegisterApiActions.registerSuccess, (state, { user }) => ({
    ...state,
    user
  }))
);

export const getUser = (state: State) => state.user;
