import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartedProductReducer } from './cartedProductReducer';
import { couponReducer } from './couponReducer';
import { paymentCartedProductReducer } from './paymentCartedProductReducer';

export const rootReducer = combineReducers({
  productReducer,
  cartedProductReducer,
  couponReducer,
  paymentCartedProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export * from './selector';
