import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import {ShopRoutingModule} from './shop-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { NotFindedComponent } from './components/not-finded/not-finded.component';
import { EmptyProductsComponent } from './components/empty-products/empty-products.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductListItemComponent,
    NotFindedComponent,
    EmptyProductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ShopRoutingModule
  ],
  exports: [],
  providers: [],
})
export class ShopModule {
  static forRoot() {
    return {
      ngModule: ShopModule,
    };
  }
}
