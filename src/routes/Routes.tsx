import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NomalLayout } from 'components';
import { PRODUCTS_LIST_PATH, CART_PATH, ROOT_PATH } from './const';
import { Cart, ProductsList } from 'pages';

/**
 * @description 페이지 라우팅
 */
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <NomalLayout>
          <Route exact path={ROOT_PATH} component={Cart} />
          <Route path={PRODUCTS_LIST_PATH} component={ProductsList} />
          <Route path={CART_PATH} component={Cart} />
        </NomalLayout>
      </Switch>
    </Router>
  );
};
