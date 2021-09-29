import { ActionReducerMap } from '@ngrx/store';

import * as fromShop from './core/reducers/shop.reducer';

export interface AppState {
  shop: fromShop.ShopState;
}

export const appReducers: ActionReducerMap<AppState> = {
  shop: fromShop.shopReducer
};
