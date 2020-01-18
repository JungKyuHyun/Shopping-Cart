import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({
  productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
