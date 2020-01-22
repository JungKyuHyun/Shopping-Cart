import { ProductModel } from 'models';
import { Actions, fetchPaymentCartedProductListAsync } from 'reducers/actions';
import { getType } from 'typesafe-actions';
import keyBy = require('lodash/keyBy');

type PaymentCartedProductInitialState = {
  items?: Record<ProductModel['id'], ProductModel>;
  isLoading: boolean;
  errMsg: string | null;
};

const paymentCartedProductInitialState: PaymentCartedProductInitialState = {
  isLoading: false,
  errMsg: null,
};

export const paymentCartedProductReducer = (
  state = paymentCartedProductInitialState,
  action: Actions,
) => {
  switch (action.type) {
    case getType(fetchPaymentCartedProductListAsync.request):
      return {
        ...state,
        isLoading: true,
        errMsg: null,
      };
    case getType(fetchPaymentCartedProductListAsync.success):
      const { item, id } = action.payload;
      const itemKeyById = keyBy(item, 'id');
      return {
        ...state,
        items: itemKeyById,
        isLoading: false,
        errMsg: null,
      };
    case getType(fetchPaymentCartedProductListAsync.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
