import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchBoxComponent} from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(SearchBoxComponent, { static: true })
  public searchBoxComponent: SearchBoxComponent;

  constructor() { }

  ngOnInit() {
  }

}
