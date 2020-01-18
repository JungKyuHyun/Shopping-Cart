import { productItems } from '../dummyData/productItems';

/**
 * @description product 관련 서비스 담당
 * @description 제품 목록, 쿠폰
 */
export const productService = {
  /**
   * @description 제품 목록 가져오기
   * @param {number} [pageNumber=1] 가져올 페이지 번호
   * @param {number} [pageSize=5] 서버에 요청할 제품 수
   *
   * NOTE: 별다른 요구사항이 없다면 일단 pageSize는 고정(5)
   */
  getItems: (pageNumber: number = 1, pageSize: number = 5) => {
    // NOTE: 서버가 없어서 가내 수공업
    const productLimit = productItems.length;

    const startIndex: number =
      pageNumber === 1 ? 0 : (pageNumber - 1) * pageSize;

    const endIndex: number =
      pageNumber * pageSize > productLimit
        ? productLimit
        : pageNumber * pageSize;

    return productItems.slice(startIndex, endIndex);
  },
  getCopons: () => {},
};
