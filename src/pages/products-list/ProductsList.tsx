import React, { useEffect, useState, useCallback } from 'react';
import { Typography, Row, Col, Pagination, Skeleton } from 'antd';
import { ProductCard, PageTitle } from 'components';
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
  }, [setCartItems, storageService.getItem]);

  // 제품 카드 클릭 이벤트 핸들러
  const handleProductCardClick = useCallback(
    (id: ProductModel['id']) => {
      if (cartItems.length >= 3) {
        return;
      }
      if (cartItems.includes(id)) {
        console.log('이미 있는 장바구니에 있어요, 모달 띄울까요? '); // FIXME: 모달 띄울까?
        return;
      }
      cartItems.push(id);
      storageService.setItem(
        'cart-class101',
        JSON.stringify([...cartItems, id]),
      );
    },
    [cartItems, setCartItems, storageService.setItem, storageService.getItem],
  );

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
          <PageTitle title="상품 목록" />
        </Col>
      </Row>
      <Row>
        {itemList ? (
          itemList.map(product => (
            <Col span={4} key={product.id}>
              {' '}
              <ProductCard
                onClick={handleProductCardClick}
                product={product}
              />{' '}
            </Col>
          ))
        ) : (
          <div>상품이 존재하지 않습니다.</div>
        )}
      </Row>

      <Row style={{ marginTop: '15px' }}>
        <Col span={24}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={5}
            total={totalProducts}
            onChange={handlePaginationOnChange}
          />
        </Col>
      </Row>
    </>
  );
};
