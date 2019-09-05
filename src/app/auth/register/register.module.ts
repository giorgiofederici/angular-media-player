import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { RegisterPageEffects } from './effects/register-page.effects';

export const ROUTES: Routes = [{ path: '', component: RegisterPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [RegisterPageComponent]
})
export class RegisterModule {}
