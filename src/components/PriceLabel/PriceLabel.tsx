import React, { FC } from 'react';
import Text from 'antd/lib/typography/Text';

type PropTypes = {
  value: number;
  strong?: boolean;
};

/**
 * @description 가격 표시용 라벨, 단위는 일단 '원화'로 고정
 * @param {number} value 가격
 * @param {boolean} [strong=false] 가격만 굵게 표시
 */
export const PriceLabel: FC<PropTypes> = props => {
  const { value, strong = false } = props;

  return (
    <>
      <Text strong={strong}>{`${value.toLocaleString()}`}</Text>
      <Text style={{ marginLeft: 2 }}>원</Text>
    </>
  );
};
