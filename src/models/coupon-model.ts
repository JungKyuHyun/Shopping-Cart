export interface CouponModel {
  /**
   * @description 쿠폰 타입
   * @returns 현재 [rate, amount]만 지원
   */
  type: string;

  /**
   * @description 쿠폰 이름
   */
  title: string;

  /**
   * @description 비율 할인(rate)
   * @example     {discountRate}% 만큼 할인합니다
   */
  discountRate?: number;

  /**
   * @description 정액 할인(amount)
   * @example     {discountAmount}원 만큼 할인합니다
   */
  discountAmount?: number;
}
