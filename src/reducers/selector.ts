import { RootState } from './index';
import { ProductModel } from 'models';

/**
 * @description 장바구니 페이지에서 사용하는 셀럭터
 * @returns items: ProductModel[], carted: CartedModel[], isLoading, errMsg
 */
export const cartedProductSelector = (state: RootState) => {
  const carted: ProductModel[] = [];

  state.cartedProductReducer.items
    ? Object.values(state.cartedProductReducer.items).map(product => {
        const newCarted = Object.assign(
          product,
          {
            quantity: { id: product.id, quantity: 1 },
          },
          { key: product.id }, // NOTE: Table에서 key라는 속성명으로만 요구해서 추가
        );
        carted.push(newCarted);
      })
    : null;

  return {
    ...state.cartedProductReducer,
    items: state.cartedProductReducer.items ? [...carted] : [],
  };
};
