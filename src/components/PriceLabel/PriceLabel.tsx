import React, { FC } from 'react';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';

type PropTypes = {
  value: number;
  strong?: boolean;
  large?: boolean;
};

/**
 * @description 가격 표시용 라벨, 단위는 일단 '원화'로 고정
 * @param {number} value 가격
 * @param {boolean} [strong=false] 가격만 굵게 표시
 * @param {boolean} [large=false] 최종 금액 표시용(빨간 가격)
 */
export const PriceLabel: FC<PropTypes> = props => {
  const { value, strong = false, large = false } = props;

  if (large) {
    return (
      <>
        <Title level={2} type="danger">
          {`${value.toLocaleString()}`}
          <small style={{ marginLeft: 3 }}>원</small>
        </Title>
      </>
    );
  }

  return (
    <>
      <Text strong={strong}>{`${value.toLocaleString()}`}</Text>
      <Text style={{ marginLeft: 2 }}>원</Text>
    </>
  );
};
