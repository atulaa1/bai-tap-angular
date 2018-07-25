import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.sass']
})
export class BookListPageComponent implements OnInit {
  list = [];
  show = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBook().subscribe((data: any) => {
      this.list = data;
      console.log(this.list);
    });
  }

  onShow() {
    this.show = !this.show;
  }

}
