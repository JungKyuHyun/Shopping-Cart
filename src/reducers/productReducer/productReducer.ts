import { getType } from 'typesafe-actions';
import { Actions, fetchProductListAsync } from 'reducers/actions';
import { ProductModel } from 'models';
import keyBy from 'lodash/keyBy';

type ProductInitialState = {
  items?: Record<ProductModel['id'], ProductModel>;
  isLoading: boolean;
  totalProducts?: number;
  errMsg: string | null;
};

const productInitialState: ProductInitialState = {
  isLoading: false,
  errMsg: null,
  totalProducts: 0,
};

export const productReducer = (
  state = productInitialState,
  action: Actions,
) => {
  switch (action.type) {
    case getType(fetchProductListAsync.request):
      return {
        ...state,
        isLoading: true,
        errMsg: null,
      };
    case getType(fetchProductListAsync.success):
      const { items } = action.payload;
      const itemsKeyById = keyBy(items, 'id');
      return {
        ...state,
        items: itemsKeyById,
        isLoading: false,
        errMsg: null,
      };
    case getType(fetchProductListAsync.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
