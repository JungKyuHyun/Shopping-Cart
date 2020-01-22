import { switchMap, filter, catchError } from 'rxjs/operators';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import {
  Actions,
  fetchProductListAsync,
  fetchCartedProductListAsync,
  fetchCouponListAsync,
  fetchCartedProductListEditAsync,
  fetchPaymentCartedProductListAsync,
} from 'reducers/actions';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import { Service } from 'index';

/**
 * @description 제품 목록을 가져오는 에픽
 */
const fetchProductListEpic: Epic = (
  action$: ActionsObservable<Actions>,
  _,
  { productService }: Service,
) =>
  action$.pipe(
    filter(isActionOf(fetchProductListAsync.request)),
    switchMap(({ payload }) => {
      const { items, totalProducts } = productService.getItems(
        payload.currentPage,
      );
      return of(fetchProductListAsync.success({ items, totalProducts }));
    }),
    catchError(err => {
      return of(fetchProductListAsync.failure(err));
    }),
  );

/**
 * @description 카트 목록 가져오기
 */
const fetchCartedProductListEpic: Epic = (
  action$: ActionsObservable<Actions>,
  _,
  { productService }: Service,
) =>
  action$.pipe(
    filter(isActionOf(fetchCartedProductListAsync.request)),
    switchMap(({ payload }) => {
      if (payload.productIdList) {
        const { items } = productService.getCartedItems(payload.productIdList);
        return of(
          fetchCartedProductListAsync.success({ items }),
          fetchCouponListAsync.request(),
        );
      }
      return of(fetchCartedProductListAsync.success({ items: [] }));
    }),
    catchError(err => {
      return of(fetchCartedProductListAsync.failure(err));
    }),
  );

/**
 * @description 카트 수정오기
 */
const fetchCartedProductListEditEpic: Epic = (
  action$: ActionsObservable<Actions>,
  _,
  { productService }: Service,
) =>
  action$.pipe(
    filter(isActionOf(fetchCartedProductListEditAsync.request)),
    switchMap(({ payload }) => {
      const { item, quantity } = productService.getCartedItem(
        payload.id,
        payload.quantity,
      );
      if (item) {
        return of(fetchCartedProductListEditAsync.success({ item, quantity }));
      }
      return of(fetchCartedProductListEditAsync.failure('cart edit error'));
    }),
    catchError(err => {
      return of(fetchCartedProductListEditAsync.failure(err));
    }),
  );

/**
 * @description 카트에서 선택된 목록만
 */
const fetchPaymentCartedProductListEpic: Epic = (
  action$: ActionsObservable<Actions>,
  _,
  {}: Service,
) =>
  action$.pipe(
    filter(isActionOf(fetchPaymentCartedProductListAsync.request)),
    switchMap(({ payload }) => {
      if (payload.ProductModelList) {
        return of(
          fetchPaymentCartedProductListAsync.success({
            item: payload.ProductModelList,
          }),
        );
      }
      return of(
        fetchPaymentCartedProductListAsync.success({
          item: [],
          id: payload.id,
        }),
      );
    }),
    catchError(err => {
      return of(fetchPaymentCartedProductListAsync.failure(err));
    }),
  );

/**
 * @description 쿠폰 목록 가져오기
 */
const fetchCouponListEpic: Epic = (
  action$: ActionsObservable<Actions>,
  _,
  { productService }: Service,
) =>
  action$.pipe(
    filter(isActionOf(fetchCouponListAsync.request)),
    switchMap(() =>
      of(productService.getCoupons()).pipe(
        switchMap(payload => {
          return of(fetchCouponListAsync.success({ data: payload }));
        }),
      ),
    ),
    catchError(err => {
      return of(fetchCouponListAsync.failure(err));
    }),
  );

export const rootEpic = combineEpics(
  fetchProductListEpic,
  fetchCartedProductListEpic,
  fetchCouponListEpic,
  fetchCartedProductListEditEpic,
  fetchPaymentCartedProductListEpic,
);
