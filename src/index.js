import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Main from './pages/main/main';
import './index.less';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route component={Main}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// reportWebVitals();
