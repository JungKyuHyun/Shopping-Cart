import React from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS_LIST_PATH } from 'routes';

/**
 * @description 장바구니 페이지
 */
export const Cart = () => {
  return (
    <>
      <div>장바구니 페이지</div>
      <NavLink to={PRODUCTS_LIST_PATH}>되나</NavLink>
    </>
  );
};
