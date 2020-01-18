import { getType } from 'typesafe-actions';
import { Actions, fetchProductListAsync } from 'reducers/actions';

type ProductInitialState = {
  isLoading: boolean;
  errMsg: string | null;
};

const productInitialState: ProductInitialState = {
  isLoading: false,
  errMsg: null,
};

export const productReducer = (
  state = productInitialState,
  action: Actions,
) => {
  switch (action.type) {
    case getType(fetchProductListAsync.request):
      return {
        ...state,
        isLoading: true,
        errMsg: null,
      };
    default:
      return state;
  }
};
