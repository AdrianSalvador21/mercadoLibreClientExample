import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {SetQueryDataAction, SetSearchDataAction} from '../../../../core/actions/shop.actions';
import {ShopService} from '../../../../core/providers/shop.service';
import {ProductItem} from '../../../../core/models/ProductItem';
import {StorageService} from '../../../../core/providers/storage.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
/*
* ProductsListComponent show all products from /api/items?q=${query}
*/
export class ProductsListComponent implements OnInit {
  public loading = false;
  public queryData: string;
  public productsList: ProductItem[] = [];
  constructor(public router: Router, public storageService: StorageService, private route: ActivatedRoute, public shopService: ShopService, private store: Store<AppState>) { }

  /*
  * Init get query data if it's valid & get products list from /items?q=${query}
  * SetQueryDataAction is called to update query in the store
  */
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

  /**
   * Get all products list from /items?q=${query}
   * SetSearchDataAction is called to update all query search data
   * @param {string} query -> url query
   */
  getProductsList(query) {
    this.loading = true;
    this.shopService.getProductsList(query).subscribe((productsData) => {
      const action = new SetSearchDataAction( {...productsData} );
      this.store.dispatch( action );
      this.productsList = productsData.items;
      this.loading = false;
    });
  }

  updateStorageQuery() {
    this.storageService.save('selected_query', this.queryData);
  }

}
