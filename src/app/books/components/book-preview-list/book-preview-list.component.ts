import { Component, Input } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'mp-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.scss']
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
