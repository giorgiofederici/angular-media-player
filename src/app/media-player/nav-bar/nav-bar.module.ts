import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { NavBarComponent } from './containers/nav-bar/nav-bar.component';

@NgModule({
  imports: [RouterModule, MaterialDesignModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class NavBarModule {}
