import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import { Routes } from 'routes';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { productService, storageService } from './services';
import * as service from 'services';
import { rootEpic } from 'epic';

export type Service = typeof service;

const services: Service = {
  productService,
  storageService,
};

const epicMiddleware = createEpicMiddleware({
  dependencies: services,
});

// 스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);
epicMiddleware.run(rootEpic);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

render(<App />, document.getElementById('root'));
