import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Register from './pages/register/register';


function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact component={Home} path="/"></Route>
                <Route exact component={Login} path="/Login"></Route>
                <Route exact component={Register} path="/Register"></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    );
}

export default RouterConfig;
