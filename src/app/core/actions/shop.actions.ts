import { Action } from '@ngrx/store';

export const SET_SEARCH_DATA = '[Shop] Set Search Data';
export const SET_QUERY_DATA = '[Shop] Set QUERY Data';
export const SET_SELECTED_PRODUCT_DATA = '[Shop] Set Selected Product Data';

export class SetSearchDataAction implements Action {
  readonly type = SET_SEARCH_DATA;
  constructor( public searchData: any ) {}
}

export class SetSelectedProductDataAction implements Action {
  readonly type = SET_SELECTED_PRODUCT_DATA;
  constructor( public productData: any ) {}
}

export class SetQueryDataAction implements Action {
  readonly type = SET_QUERY_DATA;
  constructor( public queryData: any ) {}
}

export type actions = SetSearchDataAction | SetSelectedProductDataAction | SetQueryDataAction;
