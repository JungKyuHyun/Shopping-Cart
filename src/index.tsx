import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import { Routes } from 'routes';
import { createStore } from 'redux';
import { rootReducer } from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

render(<App />, document.getElementById('root'));
