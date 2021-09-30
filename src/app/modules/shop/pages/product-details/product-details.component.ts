import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {ShopService} from '../../../../core/providers/shop.service';
import {ProductItem} from '../../../../core/models/ProductItem';
import {SEOService} from '../../../../core/providers/seo.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public loading = false;
  public productId: string;
  public productData: ProductItem;
  public queryData: string = 'Search';
  constructor(public router: Router,
              private store: Store<AppState>,
              private seoService: SEOService,
              public shopService: ShopService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.select('shop').subscribe(state => {
      if (!!state && !!state.query) {
        this.queryData = state.query;
      }
    });

    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductDetails();
  }

  getProductDetails() {
    this.loading = true;
    this.shopService.getProductDetails(this.productId).subscribe((productDetails) => {
      this.productData = productDetails.item;
      this.seoService.updateTitle(`${this.productData.title} | Mercado Libre`);
      this.seoService.updateDescription(`${this.productData.description} | Mercado Libre`);
      this.loading = false;
    });
  }

}
