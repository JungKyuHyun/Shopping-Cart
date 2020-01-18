import React, { FC } from 'react';
import { Card, Icon, Typography } from 'antd';
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
      style={{ width: 260 }}
      cover={<img alt={title} src={coverImage} />}
      actions={[
        <span>
          <Text strong={true}>{`${price.toLocaleString()}`}</Text>원
        </span>,
        <Icon type="shopping-cart" />,
      ]}
      hoverable={true}
    >
      <Meta description={title} />
    </Card>
  );
};
