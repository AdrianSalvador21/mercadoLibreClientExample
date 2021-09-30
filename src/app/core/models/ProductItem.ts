import {PriceData} from './PriceData';

export class ProductItem {
  id: string;
  title: string;
  price: PriceData;
  picture: string;
  condition: string;
  free_shipping: boolean;
  address_state: string;
  description: string;
  sold_quantity: string;

  constructor(data?: any) {

  this.id = !!data && !!data.id ? data.id : null;
  this.title = !!data && !!data.title ? data.title : null;
  this.price = !!data && !!data.price ? data.price : null;
  this.picture = !!data && !!data.picture ? data.picture : null;
  this.condition = !!data && !!data.condition ? data.condition : null;
  this.free_shipping = !!data && !!data.free_shipping ? data.free_shipping : false;
  this.condition = !!data && !!data.condition ? data.condition : '';
  this.address_state = !!data && !!data.address_state ? data.address_state : '';
  this.description = !!data && !!data.description ? data.description : '';
  this.sold_quantity = !!data && !!data.sold_quantity ? data.sold_quantity : 0;
  }
}

