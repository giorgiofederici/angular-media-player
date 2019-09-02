import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { PlaylistComponent } from './containers/playlist/playlist.component';

@NgModule({
  imports: [MaterialDesignModule],
  declarations: [PlaylistComponent],
  exports: [PlaylistComponent]
})
export class PlaylistModule {}
