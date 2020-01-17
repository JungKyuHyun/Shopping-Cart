import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PRODUCTS_LIST_PATH, CART_PATH } from './const';
import { Cart, ProductsList } from 'pages';
import { NomalLayout } from 'components';

/**
 * @description 페이지 라우팅
 */
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <NomalLayout>
          <Route path={PRODUCTS_LIST_PATH} componet={ProductsList} />
          <Route path={CART_PATH} componet={Cart} />
        </NomalLayout>
      </Switch>
    </Router>
  );
};
