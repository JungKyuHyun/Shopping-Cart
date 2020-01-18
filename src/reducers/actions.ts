import { createAsyncAction, ActionType } from 'typesafe-actions';
import { ProductModel } from 'models';

/**
 * 상품 목록 조회
 */
export const fetchProductListAsync = createAsyncAction(
  'FETCH_PRODUCT_LIST_REQUEST',
  'FETCH_PRODUCT_LIST_SUCCESS',
  'FETCH_PRODUCT_LIST_FAILURE',
)<{ currentPage: number }, ProductModel[], string>();

export type Actions = ActionType<typeof fetchProductListAsync>;
