import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {ShopService} from '../../../../core/providers/shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public queryData: string = 'Search';
  public productId: string;
  public loading = false;
  public productData: any;
  constructor(public router: Router,
              private store: Store<AppState>,
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
    console.log(this.productId);
  }

  getProductDetails() {
    this.loading = true;
    this.shopService.getProductDetails(this.productId).subscribe((productDetails) => {
      this.productData = productDetails.item;
      this.loading = false;
    });
  }

}
