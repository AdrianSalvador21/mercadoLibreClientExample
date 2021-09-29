import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {ProductsComponent} from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'items',
        component: ProductsListComponent
      },
      {
        path: 'items/:id',
        component: ProductDetailsComponent
      },
      {
        path: '**',
        redirectTo: 'items'
      }
    ]
  }
];

export const ShopRoutingModule = RouterModule.forChild(routes);
