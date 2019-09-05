import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';

export const ROUTES: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialDesignModule,
    SharedModule
  ],
  declarations: [LoginPageComponent]
})
export class LoginModule {}
