import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import * as fromBooks from './reducers';
import { BookStorageService } from './services/book-storage.service';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { CollectionEffects } from './effects/collection.effect';
import { BookEffects } from './effects/book.effects';
import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { BookExistsGuard } from './guards/book-exists.guard';
import { GoogleBooksService } from './services/google-books.service';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { AddCommasPipe } from './pipes/add-commas.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

export const ROUTES: Routes = [
  {
    path: 'find',
    component: FindBookPageComponent
  },
  {
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard]
  },
  {
    path: '',
    component: CollectionPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducers),
    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BookEffects, CollectionEffects])
  ],
  declarations: [
    CollectionPageComponent,
    BookPreviewListComponent,
    BookPreviewComponent,
    BookAuthorsComponent,
    FindBookPageComponent,
    ViewBookPageComponent,
    BookSearchComponent,
    BookDetailComponent,
    SelectedBookPageComponent,
    AddCommasPipe,
    EllipsisPipe
  ],
  providers: [BookStorageService, BookExistsGuard, GoogleBooksService]
})
export class BooksModule {}
