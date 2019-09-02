import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { NavBarComponent } from './containers/nav-bar/nav-bar.component';

@NgModule({
  imports: [MaterialDesignModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class NavBarModule {}
