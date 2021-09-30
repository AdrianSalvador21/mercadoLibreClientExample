import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ProductItem} from '../../../../core/models/ProductItem';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() productItem: ProductItem;
  @Output() emitNavigation = new EventEmitter<any>();
  constructor(public router: Router) { }

  ngOnInit() {
  }

  /* Navigate to product details page
   * @param id -> product id -> get from /api/items?q=${query}
   */
  goToItemDetails(id) {
    this.emitNavigation.emit();
    this.router.navigate(['items', id]);
  }

}
