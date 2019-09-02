import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { MediaPlayerComponent } from './containers/media-player/media-player.component';
import { PlayerModule } from '../player/player.module';
import { PlaylistModule } from '../playlist/playlist-module';
import { NavBarModule } from '../nav-bar/nav-bar.module';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [MediaPlayerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MaterialDesignModule,
    PlayerModule,
    PlaylistModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [MediaPlayerComponent]
})
export class MediaPlayerModule {}
