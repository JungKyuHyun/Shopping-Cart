import { RootState } from './index';
import { CartedModel } from 'models';

/**
 * @description 장바구니 페이지에서 사용하는 셀럭터
 * @returns items: ProductModel[], carted: CartedModel[], isLoading
 */
export const cartedProductSelector = (state: RootState) => {
  const carted: CartedModel[] = [];
  const initialCarted: CartedModel = {
    key: '',
    title: '',
    price: 0,
    quantity: 1,
  };

  state.cartedProductReducer.items
    ? Object.values(state.cartedProductReducer.items).map(product => {
        const newCarted = Object.assign({}, initialCarted);
        newCarted.key = product.id;
        newCarted.title = product.title;
        newCarted.price = product.price;
        newCarted.availableCoupon = product.availableCoupon;
        carted.push(newCarted);
      })
    : null;

  return {
    ...state.cartedProductReducer,
    items: state.cartedProductReducer.items
      ? state.cartedProductReducer.items
      : null,
    carted,
  };
};
