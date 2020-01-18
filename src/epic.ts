import { switchMap, filter, catchError } from 'rxjs/operators';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Actions, fetchProductListAsync } from 'reducers/actions';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';

/**
 * @description 제품 목록을 가져오는 에픽
 */
const fetchProductListEpic = (action$: ActionsObservable<Actions>) =>
  action$.pipe(
    filter(isActionOf(fetchProductListAsync.request)),
    switchMap(payload => {
      console.log(payload);
      return of('');
    }),
  );

export const rootEpic = combineEpics(fetchProductListEpic);
