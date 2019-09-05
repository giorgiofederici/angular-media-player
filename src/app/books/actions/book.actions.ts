import { createAction, props } from '@ngrx/store';

import { Book } from '../models/book.model';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
