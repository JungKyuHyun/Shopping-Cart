import React, { FC } from 'react';
import { Card, Icon, Typography, Tooltip } from 'antd';
import { ProductModel } from 'models';

type PropTypes = {
  product: ProductModel;
};

/**
 * @description 상품 리스트 페이지에서 사용되는 제품 카드
 * @param {ProductModel} product
 */

export const ProductCard: FC<PropTypes> = props => {
  const { Meta } = Card;
  const { Text } = Typography;
  const { id, title, coverImage, price } = props.product;

  return (
    <Card
      style={{ width: 280 }}
      cover={
        <div style={{ overflow: 'hidden', width: 280, height: 160 }}>
          <img
            alt={title}
            src={coverImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      }
      actions={[
        <span>
          <Text strong={true}>{`${price.toLocaleString()}`}</Text>
          <Text>원</Text>
        </span>,
        <Icon type="shopping-cart" />,
      ]}
      hoverable={true}
    >
      <Tooltip placement="bottom" title={title}>
        <Meta title={title} />
      </Tooltip>
    </Card>
  );
};
