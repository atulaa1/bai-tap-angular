import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import { BookHeaderComponent } from './book-header/book-header.component';
import { BookFooterComponent } from './book-footer/book-footer.component';
import { BookListPageComponent } from './book-list-page/book-list-page.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookHeaderComponent,
    BookFooterComponent,
    BookListPageComponent,
    BookDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
