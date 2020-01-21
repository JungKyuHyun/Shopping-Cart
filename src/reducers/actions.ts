import { createAsyncAction, ActionType, createAction } from 'typesafe-actions';
import { ProductModel, CouponModel } from 'models';

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

/**
 * 장바구니 상품 조회
 */
export const fetchCartedProductListAsync = createAsyncAction(
  'FETCH_CARTED_PRODUCT_LIST_REQUEST',
  'FETCH_CARTED_PRODUCT_LIST_SUCCESS',
  'FETCH_CARTED_PRODUCT_LIST_FAILURE',
)<
  { productIdList?: ProductModel['id'][] },
  { items?: ProductModel[] },
  string
>();

/**
 * 장바구니 상품 수정
 */
export const fetchCartedProductListEditAsync = createAsyncAction(
  'FETCH_CARTED_PRODUCT_LIST_EDIT_REQUEST',
  'FETCH_CARTED_PRODUCT_LIST_EDIT_SUCCESS',
  'FETCH_CARTED_PRODUCT_LIST_EDIT_FAILURE',
)<
  { id: ProductModel['id']; quantity: number },
  {
    item?: ProductModel[];
    quantity?: {
      id: ProductModel['id'];
      quantity: number;
    };
  },
  string
>();

/**
 * 쿠폰 정보 가져오기
 */
export const fetchCouponListAsync = createAsyncAction(
  'FETCH_COPON_LIST_REQUEST',
  'FETCH_COPON_LIST_SUCCESS',
  'FETCH_COPON_LIST_FAILURE',
)<undefined, { data: CouponModel[] }, string>();

export type Actions =
  | ActionType<typeof fetchProductListAsync>
  | ActionType<typeof fetchCartedProductListAsync>
  | ActionType<typeof fetchCouponListAsync>
  | ActionType<typeof fetchCartedProductListEditAsync>;
