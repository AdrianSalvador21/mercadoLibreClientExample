import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductItem} from '../../../../core/models/ProductItem';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() productItem: ProductItem;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToItemDetails(id) {
    this.router.navigate(['items', id]);
  }

}
