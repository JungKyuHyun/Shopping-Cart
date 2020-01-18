import { createAsyncAction, ActionType, createAction } from 'typesafe-actions';
import { ProductModel } from 'models';

/**
 * 상품 목록 조회
 */
export const fetchProductListAsync = createAsyncAction(
  'FETCH_PRODUCT_LIST_REQUEST',
  'FETCH_PRODUCT_LIST_SUCCESS',
  'FETCH_PRODUCT_LIST_FAILURE',
)<
  { currentPage?: number },
  { items: ProductModel[]; totalProducts: number },
  string
>();

export const getProductList = createAction('GET_PRODUCT_LIST')<{
  currentPage?: number;
}>();

export type Actions =
  | ActionType<typeof fetchProductListAsync>
  | ActionType<typeof getProductList>;
