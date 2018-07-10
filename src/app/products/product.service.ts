import {Injectable} from '@angular/core';
import {Product} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProductService {
  private _productUrl = 'http://localhost:8080/products';

  constructor(private _http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err);
  }
}
