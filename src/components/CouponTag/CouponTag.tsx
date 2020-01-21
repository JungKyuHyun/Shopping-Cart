import React, { FC } from 'react';
import { Tag, Icon, Tooltip } from 'antd';

type PropTypes = {
  label: string;
  tooltip?: string;
  color?: string;
};

/**
 * @description 쿠폰 전용 태그와 툴팁
 * @param {string} label      태크 라벨
 * @param {string} [color]    태그 색상(#108ee9 파란색 추천)
 * @param {string} [tooltip]  tooltip Text
 */

export const CouponTag: FC<PropTypes> = props => {
  const { label, color, tooltip } = props;

  return (
    <Tooltip title={tooltip} placement="bottom">
      <Tag color={color}>
        {label}
        <Icon
          type="question-circle"
          theme="twoTone"
          style={{ marginLeft: 3 }}
        />
      </Tag>
    </Tooltip>
  );
};
