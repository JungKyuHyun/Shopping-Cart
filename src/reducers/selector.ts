import { RootState } from './index';
import { ProductModel } from 'models';
import { RecommendCoupon, PriceVales } from 'components';

/**
 * @description 장바구니 페이지에서 사용하는 셀럭터
 */
export const cartedProductSelector = (state: RootState) => {
  const carted: ProductModel[] = [];

  state.cartedProductReducer.items
    ? Object.values(state.cartedProductReducer.items).map(product => {
        const newCarted = Object.assign(
          product,
          {
            quantity: {
              id: product.id,
              quantity: product.quantity?.quantity || 1,
            },
          },
          { key: product.id }, // NOTE: Table에서 key라는 속성명으로만 요구해서 추가
          { displayPrice: product.price * (product.quantity?.quantity ?? 1) },
        );
        carted.push(newCarted);
      })
    : null;

  return {
    ...state.cartedProductReducer,
    items: state.cartedProductReducer.items ? [...carted] : [],
  };
};

/**
 * @description 장바구니 페이지에서 "최종 결제 금액" 부분에서 사용될 셀렉터
 */
export const paymentCartedProductSelector = (state: RootState) => {
  const recommend: RecommendCoupon = {
    recommend: 'unApplied',
  };
  const priceVales: PriceVales = {
    totalPrice: 0,
    rateDiscountPrice: 0,
    amountDiscountPrice: 0,
  };
  const discountRate = state.couponReducer.data?.rate.discountRate;
  const discountAmount = state.couponReducer.data?.amount.discountAmount;

  state.paymentCartedProductReducer.items && discountRate && discountAmount
    ? Object.values(state.paymentCartedProductReducer.items).map(product => {
        // 수량 정의
        const quantity = product.quantity?.quantity
          ? product.quantity.quantity
          : 1;

        // 전체 금액
        priceVales.totalPrice += product.price * quantity;

        // 쿠폰 금액 계산
        if (product.availableCoupon !== false) {
          priceVales.rateDiscountPrice += Math.floor(
            (product.price * quantity * discountRate) / 100,
          );
          priceVales.amountDiscountPrice = discountAmount;
        }
      })
    : null;

  if (priceVales.rateDiscountPrice > priceVales.amountDiscountPrice) {
    recommend.recommend = 'rate';
  }
  if (
    priceVales.rateDiscountPrice !== 0 &&
    priceVales.rateDiscountPrice <= priceVales.amountDiscountPrice // 두 값이 같은 경우 'amount'로 처리한다
  ) {
    recommend.recommend = 'amount';
  }

  return { tableDataSource: priceVales, recommend };
};

/**
 * @description 쿠폰 데이터 반환 셀렉터
 */
export const couponTypeSelector = (state: RootState) => {
  return state.couponReducer.data
    ? Object.assign({}, state.couponReducer.data)
    : null;
};
