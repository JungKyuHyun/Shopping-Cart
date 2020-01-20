import { getType } from 'typesafe-actions';
import { Actions, fetchCoponListAsync } from 'reducers/actions';
import { CouponModel } from 'models';
import keyBy from 'lodash/keyBy';

type CoponInitialState = {
  data?: Record<CouponModel['type'], CouponModel>;
  isLoading: boolean;
  errMsg: string | null;
};

const coponInitialState: CoponInitialState = {
  isLoading: false,
  errMsg: null,
};

export const coponReducer = (state = coponInitialState, action: Actions) => {
  switch (action.type) {
    case getType(fetchCoponListAsync.request):
      return {
        ...state,
        isLoading: true,
        errMsg: null,
      };
    case getType(fetchCoponListAsync.success):
      const { data } = action.payload;
      const dataKeyByType = keyBy(data, 'type');
      return {
        ...state,
        data: dataKeyByType,
        isLoading: false,
        errMsg: null,
      };
    case getType(fetchCoponListAsync.failure):
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
