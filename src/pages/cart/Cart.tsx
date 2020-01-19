import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import { PRODUCTS_LIST_PATH } from 'routes';
import { PageTitle, CartTable } from 'components';
import { storageService } from 'services';

/**
 * @description 장바구니 페이지
 */
export const Cart = () => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    if (storageService.getItem('cart-class101')) {
      setCartItems(
        JSON.parse(storageService.getItem('cart-class101') as string),
      );
    }
  }, [setCartItems, storageService.getItem]);

  console.log(cartItems);
  return (
    <>
      <Row>
        <Col span={24}>
          <PageTitle title="장바구니" />
        </Col>
      </Row>
      <Row>
        <CartTable />
      </Row>
      <Row>
        <Divider orientation="left">최종 결제 금액</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
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
