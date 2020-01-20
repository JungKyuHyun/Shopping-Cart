import { ProductModel } from 'models';
import { fetchCartedProductListAsync, Actions } from 'reducers/actions';
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
    default:
      return state;
  }
};
