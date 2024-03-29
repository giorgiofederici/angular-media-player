import { createReducer, on } from '@ngrx/store';

import { RegisterPageActions, RegisterApiActions } from '../actions';

export const registerPageFeatureKey = 'registerPage';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export const reducer = createReducer(
  initialState,
  on(RegisterPageActions.register, state => ({
    ...state,
    error: null,
    pending: true
  })),
  on(RegisterApiActions.registerSuccess, state => ({
    ...state,
    error: null,
    pending: false
  })),
  on(RegisterApiActions.registerFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
