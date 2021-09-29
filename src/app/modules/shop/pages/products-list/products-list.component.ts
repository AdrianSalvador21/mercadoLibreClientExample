import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {SetQueryDataAction, SetSearchDataAction} from '../../../../core/actions/shop.actions';
import {ShopService} from '../../../../core/providers/shop.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public loading = false;
  public queryData: string;
  public productsList = [];
  constructor(public router: Router,
              private route: ActivatedRoute,
              public shopService: ShopService,
              private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          if (!!params && !!params.search) {
            this.queryData = params.search;
            const action = new SetQueryDataAction( this.queryData );
            this.store.dispatch( action );
            this.getProductsList(params.search);
          } else {
            this.queryData = '';
            this.productsList = [];
          }
        }
      );
  }

  getProductsList(query) {
    this.loading = true;
    this.shopService.getProductsList(query).subscribe((productsData) => {
      const action = new SetSearchDataAction( {...productsData} );
      this.store.dispatch( action );
      this.productsList = productsData.items;
      this.loading = false;
    });
  }

}
