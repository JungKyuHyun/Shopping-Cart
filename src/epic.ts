import { switchMap, filter, catchError } from 'rxjs/operators';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import {
  Actions,
  fetchProductListAsync,
  fetchCartedProductListAsync,
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
        return of(fetchCartedProductListAsync.success({ items }));
      }
      return of(fetchCartedProductListAsync.success({ items: [] }));
    }),
    catchError(err => {
      return of(fetchCartedProductListAsync.failure(err));
    }),
  );

export const rootEpic = combineEpics(
  fetchProductListEpic,
  fetchCartedProductListEpic,
);
