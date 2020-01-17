import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

const App = () => (
  <>
    <div>Test</div>
    <DatePicker />
  </>
);

render(<App />, document.getElementById('root'));
