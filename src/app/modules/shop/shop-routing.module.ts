import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {ProductsComponent} from './pages/products/products.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Inicio | Mercado Libre',
          description: 'Compre productos con Envío GRATIS y Rápido en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles.',
          keywords: 'marketplace, compras en linea, prestamos hipotecarios, venta online, compra y venta online más grande de América Latina, Mercado Libre'
        },
      },
      {
        path: 'items',
        component: ProductsListComponent,
        data: {
          title: 'Lista de productos | Mercado Libre',
          description: 'Encontrá todas las categorías y secciones en Mercado Libre México. Descubrí la mejor forma de comprar online.'
        }
      },
      {
        path: 'items/:id',
        component: ProductDetailsComponent,
        data: {title: 'Detalle de producto | Mercado Libre'}
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

export const ShopRoutingModule = RouterModule.forChild(routes);
