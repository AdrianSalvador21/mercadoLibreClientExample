import {Component, Input, OnInit} from '@angular/core';
import {Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbList: string[];

  public queryData: string;
  constructor(public router: Router, private store: Store<AppState>) { }

  /*
  * Init get query data if it's valid & update this.queryData
  */
  ngOnInit() {
    this.store.select('shop').subscribe(state => {
      if (!!state && !!state.query) {
        this.queryData = state.query;
      }
    });
  }

  /* Navigate to previous search step
   * @param index -> breadcrumb item index
   */
  goToBreadcrumb(index) {
   if (index === 0 || index === 1) {
     const queryParams: Params = { search: this.queryData };
     this.router.navigate(['items'], {
       queryParams,
       queryParamsHandling: 'merge', // remove to replace all query params by provided
     });
   }
  }
}
