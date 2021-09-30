import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {ShopService} from '../../../../core/providers/shop.service';
import {ProductItem} from '../../../../core/models/ProductItem';
import {SEOService} from '../../../../core/providers/seo.service';
import {StorageService} from '../../../../core/providers/storage.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
/*
* ProductDetailsComponent show products details from /api/items/${id}
*/
export class ProductDetailsComponent implements OnInit {
  public loading = false;
  public productId: string;
  public productData: ProductItem;
  public queryData: string;
  public searchLabel = 'Busqueda';
  constructor(public router: Router,
              private store: Store<AppState>,
              private storageService: StorageService,
              private seoService: SEOService,
              public translateService: TranslateService,
              public shopService: ShopService,
              private route: ActivatedRoute) {
  }

  /*
  * Init get query data if it's valid & get product id from url
  */
  ngOnInit() {
    this.translateService.get('shop.productDetails.searchLabel').subscribe((res: string) => {
      this.searchLabel = res;
    });

    this.store.select('shop').subscribe(state => {
      if (!!state && !!state.query) {
        this.queryData = state.query;
      } else {
        this.queryData = !!this.storageService.read('selected_query') ? this.storageService.read('selected_query') : this.searchLabel;
      }
    });

    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductDetails();
  }

  /*
  * Call /items/${id} to get product details & update browser metadata
  */
  getProductDetails() {
    this.loading = true;
    this.shopService.getProductDetails(this.productId).subscribe((productDetails) => {
      if (!!productDetails && !!productDetails.item) {
        this.productData = productDetails.item;
        this.seoService.updateTitle(`${this.productData.title} | Mercado Libre`);
        this.seoService.updateDescription(`${this.productData.description} | Mercado Libre`);
        this.loading = false;
      } else {
        this.router.navigate(['items']);
      }
    });
  }
}
