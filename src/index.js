import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import dva from 'dva';

const createHistory = require('history').createBrowserHistory;

const app = dva({
  history: createHistory(),
});

// app.model(require('./models/home').default);

app.router(require('./router').default);

const APP = app.start();

ReactDOM.render(
  <React.StrictMode>
    <APP></APP>
  </React.StrictMode>,
  document.getElementById('root')
);

// 性能测试
// reportWebVitals();
