import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { CART_PATH } from 'routes';

/**
 * @description NomalLayout에서 사용하는 메인 헤더 컴포넌트
 */
export const MainHeader = () => {
  const { Title, Text } = Typography;

  return (
    <>
      <Row>
        <Col span={12}>
          <Title style={titleStyle}>CLASS 101</Title>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <NavLink to={CART_PATH}>
            <Button icon="shopping-cart">
              <Text strong={true}>장바구니</Text>
            </Button>
          </NavLink>
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
