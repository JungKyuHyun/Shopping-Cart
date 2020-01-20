import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartedProductReducer } from './cartedProductReducer';
import { coponReducer } from './coponReducer';

export const rootReducer = combineReducers({
  productReducer,
  cartedProductReducer,
  coponReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
