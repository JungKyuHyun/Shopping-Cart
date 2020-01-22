import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import { PRODUCTS_LIST_PATH } from 'routes';
import {
  PageTitle,
  CartTable,
  CartFinalPriceTable,
  LoadingSpin,
} from 'components';
import { storageService } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCartedProductListAsync,
  fetchCartedProductListEditAsync,
  fetchPaymentCartedProductListAsync,
} from 'reducers/actions';
import { cartedProductSelector } from 'reducers';
import { ProductModel } from 'models';

/**
 * @description 장바구니 페이지
 */
export const Cart = () => {
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector(cartedProductSelector);

  useEffect(() => {
    if (storageService.getItem('cart-class101')) {
      dispatch(
        fetchCartedProductListAsync.request({
          productIdList: JSON.parse(
            storageService.getItem('cart-class101') as string,
          ),
        }),
      );
    }
  }, [storageService.getItem]);

  const handleCartTableClick = useCallback(() => {
    storageService.removeItem('cart-class101');
    dispatch(fetchCartedProductListAsync.request({}));
  }, [storageService.removeItem]);

  const handleCartTableChange = useCallback(
    (id: ProductModel['id'], quantity: number) => {
      dispatch(fetchCartedProductListEditAsync.request({ id, quantity }));
    },
    [dispatch],
  );

  const handleSelectChange = useCallback(
    (selectedRows: any) => {
      dispatch(fetchPaymentCartedProductListAsync.request(selectedRows));
      console.log(selectedRows);
    },
    [dispatch],
  );

  if (isLoading && !items) {
    return <LoadingSpin />;
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <PageTitle title="장바구니" />
        </Col>
      </Row>
      <Row style={{ marginBottom: 50 }}>
        <CartTable
          dataSource={items}
          onClick={handleCartTableClick}
          onChange={handleCartTableChange}
          onSelectChange={handleSelectChange}
        />
      </Row>
      <Row>
        <Divider orientation="left">최종 결제 금액</Divider>
        <CartFinalPriceTable dataSource={items} />
        <Divider />
      </Row>
      <Row style={{ textAlign: 'right' }}>
        <NavLink to={PRODUCTS_LIST_PATH}>
          <Button size="large" style={{ marginRight: 8 }}>
            뒤로 가기
          </Button>
        </NavLink>
        <Button type="danger" size="large" style={{ marginRight: 6 }}>
          결제하기
        </Button>
      </Row>
    </>
  );
};
