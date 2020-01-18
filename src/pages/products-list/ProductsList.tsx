import React, { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { Typography, Row, Col, Pagination } from 'antd';
import { ProductCard } from 'components';
import { ProductModel } from 'models';
import { useDispatch } from 'react-redux';
import { fetchProductListAsync } from 'reducers/actions';

const dummyProduct: ProductModel = {
  id: 'B9vUv0E0ibc0X55kVVLr',
  title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
  coverImage:
    'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
  price: 560000,
  score: 200,
};

/**
 * @description 상품 목록 페이지
 */
export const ProductsList = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchProductListAsync.request({ currentPage }));
  }, [dispatch, currentPage]);

  // 페이지네이션 onChange
  const handlePaginationOnChange = useCallback(
    (page: number, pageNumber?: number) => {
      setCurrentPage(page);
      console.log(page, pageNumber);
    },
    [setCurrentPage],
  );

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={2}>상품 목록</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ProductCard product={dummyProduct} />
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col span={24}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={5}
            total={50}
            onChange={handlePaginationOnChange}
          />
        </Col>
      </Row>
    </>
  );
};
