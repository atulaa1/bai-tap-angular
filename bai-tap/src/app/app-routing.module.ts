import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailPageComponent} from './book-detail-page/book-detail-page.component';
import {BookListPageComponent} from './book-list-page/book-list-page.component';
const routes: Routes = [
  { path: 'detail', component: BookDetailPageComponent },
  { path: '', component: BookListPageComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
