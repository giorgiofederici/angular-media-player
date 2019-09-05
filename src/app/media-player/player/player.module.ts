import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { PlayerComponent } from './containers/player/player.component';

@NgModule({
  imports: [MaterialDesignModule],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class PlayerModule {}
