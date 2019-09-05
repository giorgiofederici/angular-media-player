import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from './reducers';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { RegisterPageEffects } from '../register/effects/register-page.effects';
import { RegisterApiEffects } from '../register/effects/register-api.effects';
import { LoginPageEffects } from '../login/effects/login-page.effects';
import { LoginApiEffects } from '../login/effects/login-api.effects';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: '../login/login.module#LoginModule' },
      {
        path: 'register',
        loadChildren: '../register/register.module#RegisterModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([
      RegisterPageEffects,
      RegisterApiEffects,
      LoginPageEffects,
      LoginApiEffects
    ])
  ]
})
export class AuthModule {}
