/**
 * Main 主入口
 */
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from '../cart/cart';
import Consultation from '../consultation/consultation';
import Home from '../home/home';
import Profile from '../profile/profile';

import Navfooter from '../../components/nav-footer/nav-footer';

import { NavfooterContext } from '../../utils/context';

import './main.less';


// 导航组件需要的信息
const navList = [{
    path: '/home',
    component: Home,
    icon: 'medical',
    text: '首页'
}, {
    path: '/consultation',
    component: Consultation,
    icon: 'platform',
    text: '医疗咨询'
}, {
    path: '/cart',
    component: Cart,
    icon: 'cart',
    text: '购物车'
}, {
    path: '/profile',
    component: Profile,
    icon: 'user',
    text: '用户'
}];

export default function Main() {
    useEffect(() => {
        // 判断token
        let tokenInfo = localStorage.getItem('token');
        if (!tokenInfo) {
            window.location.replace('/login');
        }
        if (window.location.pathname === '/') {
            window.location.replace('/home');
        }
    }, [])
    return (
        <div className="page-of-main">
            <div className="main-m-container">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/consultation" component={Consultation} />
                </Switch>
            </div>
            {/* <Logo type={'small'}></Logo> */}
            <NavfooterContext.Provider value={navList}>
                <Navfooter></Navfooter>
            </NavfooterContext.Provider>
        </div>
    )
}
