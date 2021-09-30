import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({providedIn: 'root'})
export class ShopService {
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, public router: Router, private spinner: NgxSpinnerService) {
  }

  getQuery( query: string ) {
    const url = `${this.apiUrl}${ query }`;
    return this.http.get(url);
  }

  getProductsList( query ) {
    this.spinner.show();
    return this.getQuery(`/items?q=${query}`)
      .pipe(
        map( data => {
          this.spinner.hide();
          return data as any;
        }),
        catchError((e) => {
          this.spinner.hide();
          return throwError(false);
        })
      );
  }

  getProductDetails( id ) {
    this.spinner.show();
    return this.getQuery(`/items/${id}`)
      .pipe(
        map( data => {
          this.spinner.hide();
          return data as any;
        }),
        catchError((e) => {
          this.spinner.hide();
          return throwError(false);
        })
      );
  }
}
