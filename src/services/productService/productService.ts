import { productItems } from '../dummyData/productItems';
import { coupons } from '../dummyData/coupons';
import { ProductModel } from 'models';

/**
 * @description product 관련 서비스 담당
 * @description 제품 목록, 쿠폰
 */
export const productService = {
  /**
   * @description 제품 목록 가져오기
   * @param {number} [pageNumber=1] 가져올 페이지 번호
   * @param {number} [pageSize=4] 서버에 요청할 제품 수
   *
   * NOTE: 별다른 요구사항이 없다면 일단 pageSize는 고정(4) - 짝수가 ui 구성하기 편함(why? antd는 col을 24로 나눈다.)
   */
  getItems: (pageNumber: undefined | number = 1, pageSize: number = 4) => {
    // NOTE: 서버가 없어서 가내 수공업
    const newProductItems: ProductModel[] = Object.assign(productItems);
    const totalProducts = newProductItems.length;

    const startIndex: number =
      pageNumber === 1 ? 0 : (pageNumber - 1) * pageSize;

    const endIndex: number =
      pageNumber * pageSize > totalProducts
        ? totalProducts
        : pageNumber * pageSize;

    // NOTE: 최대한 서버가 보내주는 데이터랑 비슷하게 만듬.
    const serverData = {
      items: newProductItems
        .sort((a, b) => b.score - a.score)
        .slice(startIndex, endIndex),
      totalProducts,
    };

    return serverData;
  },

  /**
   * @description 장바구니에 있는 데이터만 가져옴.
   * @param {ProductModel['id']} cartedProductList ProductModel['id'] 배열
   */
  getCartedItems: (cartedProductList: ProductModel['id'][]) => {
    // NOTE: 서버가 없어서 가내 수공업
    const newProductItems: ProductModel[] = Object.assign(productItems);
    const items = newProductItems.filter(product => {
      if (
        product.id === cartedProductList[0] ||
        product.id === cartedProductList[1] ||
        product.id === cartedProductList[2]
      ) {
        return true;
      }
    });
    return items.length ? { items } : {};
  },

  /**
   * @description 선택된 데이터만 가져옴.
   * @param {ProductModel['id']} cartedProduct ProductModel['id'] 단일
   */
  getCartedItem: (cartedProduct: ProductModel['id'], quantity: number) => {
    // NOTE: 서버가 없어서 가내 수공업
    const newProductItems: ProductModel[] = Object.assign(productItems);
    const item = newProductItems.filter(product => {
      if (product.id === cartedProduct) return true;
    });

    return item.length
      ? {
          item,
          quantity: {
            id: cartedProduct,
            quantity,
          },
        }
      : {};
  },
  /**
   * @description 상품에 적용되는 쿠폰 데이터를 가져옴
   */
  getCoupons: () => {
    return Object.assign({}, coupons);
  },
};
