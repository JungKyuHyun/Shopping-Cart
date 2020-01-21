import React from 'react';
import { Descriptions, Badge } from 'antd';
import { PriceLabel } from 'components/PriceLabel';

/**
 * @description 장바구니 화면에서 최종 결제 금액을 보여주는 테이블
 */
export const CartFinalPriceTable = () => {
  return (
    <Descriptions bordered style={{ margin: 50 }}>
      <Descriptions.Item label="총 상품 금액" span={2}>
        <PriceLabel value={20000} />
      </Descriptions.Item>
      <Descriptions.Item label="상품 할인 금액">
        <PriceLabel value={2000} />
      </Descriptions.Item>
      <Descriptions.Item label="최종 가격" span={3}>
        <PriceLabel value={18000} large={true} />
      </Descriptions.Item>
    </Descriptions>
  );
};
