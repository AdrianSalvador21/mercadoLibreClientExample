import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SetQueryDataAction} from '../../../../core/actions/shop.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
/*
* SearchBoxComponent update query for the product search
*/
export class SearchBoxComponent implements OnInit {

  public queryData: string = '';
  constructor(public router: Router, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          if (!!params && !!params.search) {
            this.queryData = params.search;
          }
      }
      );
  }

  /* Update store query data & update url query
   * @param event -> html event
   */
  validateInput(event?) {
    if (!!event) {
      event.preventDefault();
    }
    if (!this.isInputValid()) {
      return;
    }

    const queryParams: Params = { search: this.queryData };
    const action = new SetQueryDataAction( this.queryData );
    this.store.dispatch( action );
    this.router.navigate(['items'], {
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  /*
   *  Return to home page
   */
  goToMain() {
    this.router.navigate(['']);
  }

  /*
   *  Validate if query data is filled
   */
  isInputValid() {
    return !!this.queryData;
  }

}
