import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromRoot from '../../../media-player/media-player/reducers/media-player.reducer';
import * as fromAuth from './auth.reducer';
import * as fromRegisterPage from '../../register/reducers/register-page.reducer';
import * as fromLoginPage from '../../login/reducers/login-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  registerPage: fromRegisterPage.State;
  loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromRegisterPage.registerPageFeatureKey]: fromRegisterPage.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);
export const getUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);
export const getLoggedIn = createSelector(
  getUser,
  user => !!user
);

export const selectRegisterPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.registerPage
);
export const getRegisterPageError = createSelector(
  selectRegisterPageState,
  fromRegisterPage.getError
);
export const getRegisterPagePending = createSelector(
  selectRegisterPageState,
  fromRegisterPage.getPending
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
