export type Quantity = {
  id: string;
  quantity: number;
};

/**
 * @description 장바구니 모델
 */
export interface CartedModel {
  /**
   * @description 키값, 유일한 값
   */
  key: string;

  /**
   * @description 상품 제목
   */
  title: string;

  /**
   * @description 상품 수량
   */
  quantity: Quantity;

  /**
   * @description 상품 가격
   */
  price: number;

  /**
   * @description 쿠폰 사용 가부
   */
  availableCoupon?: boolean;
}
