import React, { FC, useCallback, useState, useEffect } from 'react';
import { Card, Icon, Typography, Tooltip } from 'antd';
import { ProductModel } from 'models';
import { storageService } from 'services';
import { PriceLabel } from 'components';

type PropTypes = {
  product: ProductModel;
  onClick: (id: ProductModel['id']) => void;
};

/**
 * @description 상품 리스트 페이지에서 사용되는 제품 카드
 * @param {ProductModel} product
 */

export const ProductCard: FC<PropTypes> = props => {
  const { Meta } = Card;
  const { id, title, coverImage, price } = props.product;
  const { onClick } = props;
  const [carted, setCarted] = useState<boolean>(false);

  useEffect(() => {
    if (storageService.checkCart(id)) {
      setCarted(true);
    }
  }, [onClick]);

  const handleIconClick = useCallback(
    (id: ProductModel['id']) => {
      onClick(id);
      if (storageService.checkCart(id)) {
        setCarted(true);
      } else {
        setCarted(false);
      }
    },
    [onClick],
  );

  return (
    <Card
      style={{ width: 320, marginBottom: 10 }}
      cover={
        <div style={{ overflow: 'hidden', width: 320, height: 180 }}>
          <img
            alt={title}
            src={coverImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      }
      actions={[
        <span>
          <PriceLabel value={price} strong={true} />
        </span>,
        <span
          onClick={() => handleIconClick(id)}
          style={carted ? { color: '#1890ff', fontWeight: 'bold' } : {}}
        >
          <Icon
            type="shopping-cart"
            style={{
              fontSize: '20px',
              marginRight: '4px',
            }}
          />
          {carted ? '빼기' : '담기'}
        </span>,
      ]}
      hoverable={true}
    >
      <Tooltip placement="bottom" title={title}>
        <Meta title={title} />
      </Tooltip>
    </Card>
  );
};
