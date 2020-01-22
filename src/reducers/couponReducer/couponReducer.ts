import { getType } from 'typesafe-actions';
import { Actions, fetchCouponListAsync } from 'reducers/actions';
import { CouponModel } from 'models';
import keyBy from 'lodash/keyBy';

type CouponInitialState = {
  data?: Record<CouponModel['type'], CouponModel>;
  isLoading: boolean;
  errMsg: string | null;
};

const couponInitialState: CouponInitialState = {
  isLoading: false,
  errMsg: null,
};

export const couponReducer = (
  state = couponInitialState,
  action: Actions,
): CouponInitialState => {
  switch (action.type) {
    case getType(fetchCouponListAsync.request):
      return {
        ...state,
        isLoading: true,
        errMsg: null,
      };
    case getType(fetchCouponListAsync.success):
      const { data } = action.payload;
      const dataKeyByType = keyBy(data, 'type');
      return {
        ...state,
        data: dataKeyByType,
        isLoading: false,
        errMsg: null,
      };
    case getType(fetchCouponListAsync.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
