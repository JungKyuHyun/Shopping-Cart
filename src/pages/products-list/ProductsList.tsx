import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Pagination, Empty, Alert, Modal } from 'antd';
import { ProductCard, PageTitle, LoadingSpin, InfoModal } from 'components';
import { ProductModel } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductListAsync } from 'reducers/actions';
import { RootState } from 'reducers';
import { storageService } from 'services';

/**
 * @description 상품 목록 페이지
 */
export const ProductsList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cartItems, setCartItems] = useState<ProductModel['id'][]>([]);
  const { isLoading, items, totalProducts } = useSelector(
    (state: RootState) => state.productReducer,
  );
  const itemList = items && Object.entries(items).map(item => item[1]);

  useEffect(() => {
    dispatch(fetchProductListAsync.request({ currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (storageService.getItem('cart-class101')) {
      setCartItems(
        JSON.parse(storageService.getItem('cart-class101') as string),
      );
    }
  }, [setCartItems, storageService.setItem]);

  // 제품 카트 클릭 이벤트 핸들러
  const handleProductCardClick = useCallback(
    (id: ProductModel['id']) => {
      if (cartItems.includes(id)) {
        storageService.setItem(
          'cart-class101',
          JSON.stringify([...cartItems.filter(value => value !== id)]),
        );
        setCartItems([...cartItems.filter(value => value !== id)]);
      } else if (cartItems.length >= 3) {
        InfoModal('warning', '주의', '장바구니에는 3개 이상 담을 수 없습니다.');
      } else {
        cartItems.push(id);
        storageService.setItem('cart-class101', JSON.stringify([...cartItems]));
      }
    },
    [cartItems, setCartItems, storageService.setItem, storageService.getItem],
  );

  // 페이지네이션 onChange
  const handlePaginationOnChange = useCallback(
    (page: number, pageNumber?: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage],
  );

  if (isLoading) return <LoadingSpin />;

  return (
    <>
      <Row>
        <Col span={24}>
          <PageTitle title="상품 목록" />
        </Col>
      </Row>
      <Row>
        {itemList ? (
          itemList.map(product => (
            <Col xs={24} sm={12} lg={6} key={product.id}>
              {' '}
              <ProductCard
                onClick={handleProductCardClick}
                product={product}
              />{' '}
            </Col>
          ))
        ) : (
          <Empty />
        )}
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={4}
            total={totalProducts}
            onChange={handlePaginationOnChange}
          />
        </Col>
      </Row>
    </>
  );
};
