import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import { Routes } from 'routes';

const App = () => (
  <>
    <Routes />
  </>
);

render(<App />, document.getElementById('root'));
