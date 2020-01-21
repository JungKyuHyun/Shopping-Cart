import { ProductModel } from 'models';
import {
  fetchCartedProductListAsync,
  Actions,
  fetchCartedProductListEditAsync,
} from 'reducers/actions';
import { getType } from 'typesafe-actions';
import keyBy = require('lodash/keyBy');

type CartedProductInitialState = {
  items?: Record<ProductModel['id'], ProductModel>;
  isLoading: boolean;
  errMsg: string | null;
};

const cartedProductInitialState: CartedProductInitialState = {
  isLoading: false,
  errMsg: null,
};

export const cartedProductReducer = (
  state = cartedProductInitialState,
  action: Actions,
) => {
  switch (action.type) {
    case getType(fetchCartedProductListAsync.request):
      return {
        ...state,
        isLoading: true,
        errMsg: null,
      };
    case getType(fetchCartedProductListAsync.success):
      const { items } = action.payload;
      const itemsKeyById = keyBy(items, 'id');
      return {
        ...state,
        items: itemsKeyById,
        isLoading: false,
        errMsg: null,
      };
    case getType(fetchCartedProductListAsync.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    case getType(fetchCartedProductListEditAsync.success):
      const { item, quantity } = action.payload;
      const quantityObj = {
        id: quantity?.id,
        quantity: quantity?.quantity,
      };
      item && Object.assign(item[0], { quantity: quantityObj });

      const itemKeyById = keyBy(item, 'id');

      return {
        ...state,
        items: { ...state.items, ...itemKeyById },
        isLoading: false,
        errMsg: null,
      };
    case getType(fetchCartedProductListEditAsync.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
