import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartedProductReducer } from './cartedProductReducer';
import { couponReducer } from './couponReducer';

export const rootReducer = combineReducers({
  productReducer,
  cartedProductReducer,
  couponReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
