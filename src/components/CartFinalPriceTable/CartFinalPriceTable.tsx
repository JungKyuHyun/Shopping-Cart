import React, { FC, useState, useEffect, useCallback } from 'react';
import { Descriptions, Radio } from 'antd';
import { PriceLabel } from 'components/PriceLabel';
import { useSelector } from 'react-redux';
import { couponTypeSelector } from 'reducers';
import { RadioChangeEvent } from 'antd/lib/radio';

export type PriceVales = {
  totalPrice: number;
  rateDiscountPrice: number;
  amountDiscountPrice: number;
};

export type RecommendCoupon = {
  [key: string]: 'unApplied' | 'amount' | 'rate';
};

type PropTypes = {
  dataSource: PriceVales;
  recommend: RecommendCoupon;
};

/**
 * @description 장바구니 화면에서 최종 결제 금액을 보여주는 테이블
 */
export const CartFinalPriceTable: FC<PropTypes> = props => {
  const { dataSource, recommend } = props;
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [defaultChecked, setDefaultChecked] = useState('unApplied');
  const couponData = useSelector(couponTypeSelector);
  const isNotRecommend: boolean = recommend.recommend === 'unApplied';

  // 자동 추천 기능
  useEffect(() => {
    setDefaultChecked(recommend.recommend);
    if (recommend.recommend === 'rate') {
      setDiscountPrice(dataSource.rateDiscountPrice);
    }
    if (recommend.recommend === 'amount') {
      setDiscountPrice(dataSource.amountDiscountPrice);
    }
    if (recommend.recommend === 'unApplied') {
      setDiscountPrice(0);
    }
  }, [dataSource, recommend]);

  const handleChange = useCallback(
    (event: RadioChangeEvent) => {
      setDefaultChecked(event.target.value);
      if (event.target.value === 'rate') {
        setDiscountPrice(dataSource.rateDiscountPrice);
      }
      if (event.target.value === 'amount') {
        setDiscountPrice(dataSource.amountDiscountPrice);
      }
      if (event.target.value === 'unApplied') {
        setDiscountPrice(0);
      }
    },
    [setDiscountPrice, dataSource],
  );

  return (
    <>
      {couponData ? (
        <Radio.Group
          value={defaultChecked}
          buttonStyle="solid"
          style={{ margin: '25px 50px 0 60px' }}
          onChange={handleChange}
        >
          <Radio value={'unApplied'} disabled={isNotRecommend}>
            쿠폰 미적용
          </Radio>
          <Radio value={couponData.rate.type} disabled={isNotRecommend}>
            {couponData.rate.title}
          </Radio>
          <Radio value={couponData.amount.type} disabled={isNotRecommend}>
            {couponData.amount.title}
          </Radio>
        </Radio.Group>
      ) : (
        ''
      )}
      <Descriptions bordered style={{ margin: '10px 50px 0 50px' }}>
        <Descriptions.Item label="총 상품 금액" span={2}>
          <PriceLabel value={dataSource.totalPrice} />
        </Descriptions.Item>
        <Descriptions.Item label="상품 할인 금액">
          <PriceLabel value={discountPrice} />
        </Descriptions.Item>
        <Descriptions.Item label="최종 가격" span={3}>
          <PriceLabel
            value={dataSource.totalPrice - discountPrice}
            large={true}
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
