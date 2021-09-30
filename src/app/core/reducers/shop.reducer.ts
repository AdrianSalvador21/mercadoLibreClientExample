import * as fromShop from '../actions/shop.actions';
import {ProductItem} from '../models/ProductItem';

export interface ShopState {
  searchData: ProductItem[];
  selectedProductData: ProductItem;
  query: string;
}

const initialStatus: ShopState = {
  searchData: [],
  selectedProductData: new ProductItem(),
  query: ''
};

export function shopReducer(state = initialStatus, action: fromShop.actions): any {
  switch (action.type) {
    case fromShop.SET_SEARCH_DATA:
      return {
        ...state,
        searchData: {...action.searchData },
      };

    case fromShop.SET_SELECTED_PRODUCT_DATA:
      return {
        ...state,
        selectedProductData: { ...action.productData },
      };

    case fromShop.SET_QUERY_DATA:
      return {
        ...state,
        query: action.queryData,
      };

    default:
      return state;
  }
}
