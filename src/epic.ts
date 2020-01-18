import { switchMap, filter, catchError } from 'rxjs/operators';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import { Actions, fetchProductListAsync } from 'reducers/actions';
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
  );

export const rootEpic = combineEpics(fetchProductListEpic);
