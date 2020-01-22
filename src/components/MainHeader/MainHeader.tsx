import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { CART_PATH, PRODUCTS_LIST_PATH } from 'routes';
import { NavLinkIconButton } from 'components/NavLinkIconButton';

/**
 * @description NomalLayout에서 사용하는 메인 헤더 컴포넌트
 */
export const MainHeader = () => {
  const { Title, Text } = Typography;
  const location = useLocation();

  const isCartedPage: boolean = location.pathname === CART_PATH;

  return (
    <>
      <Row>
        <Col xs={20} sm={12}>
          <NavLink to={PRODUCTS_LIST_PATH}>
            <Title style={titleStyle}>KYU SHOP</Title>
          </NavLink>
        </Col>
        <Col xs={4} sm={12} style={{ textAlign: 'right' }}>
          {isCartedPage ? (
            <NavLinkIconButton
              to={PRODUCTS_LIST_PATH}
              icon="appstore"
              text="상품목록"
            />
          ) : (
            <NavLinkIconButton
              to={CART_PATH}
              icon="shopping-cart"
              text="장바구니"
            />
          )}
        </Col>
      </Row>
    </>
  );
};

const titleStyle = {
  color: '#fff',
  verticalAlign: 'center',
  marginTop: '7px',
};
