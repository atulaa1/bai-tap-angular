import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://fakerestapi.azurewebsites.net/api/Books';

  constructor(private http: HttpClient) {
  }

  getBook(): Observable<any> {
    return this.http.get(this.url);
  }
}
