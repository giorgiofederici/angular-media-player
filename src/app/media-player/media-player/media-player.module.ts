import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { MediaPlayerComponent } from './containers/media-player/media-player.component';
import { PlayerModule } from '../player/player.module';
import { PlaylistModule } from '../playlist/playlist-module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ROOT_REDUCERS, metaReducers } from './reducers/media-player.reducer';
import { AuthModule } from '../../auth/auth/auth.module';

export const ROUTES: Routes = [
  {
    path: 'books',
    loadChildren: '../../books/books.module#BooksModule'
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AuthModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'Angular Media Player',
      // In a production build you would want to disable the Store Devtools
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(ROUTES),
    MaterialDesignModule,
    PlayerModule,
    PlaylistModule,
    NavBarModule
  ],
  declarations: [MediaPlayerComponent],
  providers: [],
  bootstrap: [MediaPlayerComponent]
})
export class MediaPlayerModule {}
