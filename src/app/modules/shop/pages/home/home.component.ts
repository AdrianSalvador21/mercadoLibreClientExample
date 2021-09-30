import {Component, OnInit, ViewChild} from '@angular/core';
import {EmptyProductsComponent} from '../../components/empty-products/empty-products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(EmptyProductsComponent, { static: true })
  public emptyProductsComponent: EmptyProductsComponent;

  constructor() { }

  ngOnInit() {
  }

}
