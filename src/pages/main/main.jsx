/**
 * Main 主入口
 */
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from '../cart/cart';
import Consultation from '../consultation/consultation';
import Index from '../index/index';
import Profile from '../profile/profile';
import Search from '../search/search';

import Navfooter from '../../components/nav-footer/nav-footer';

import { NavfooterContext } from '../../utils/context';

import './main.less';


// 导航组件需要的信息
// const navList = [{
//     path: '/home',
//     component: Home,
//     icon: 'medical',
//     text: '首页'
// }, {
//     path: '/consultation',
//     component: Consultation,
//     icon: 'platform',
//     text: '医疗咨询'
// }, {
//     path: '/search',
//     component: Search,
//     icon: 'cart',
//     text: '医疗检索'
// }, {
//     path: '/profile',
//     component: Profile,
//     icon: 'user',
//     text: '用户'
// }];
const navList = [{
    path: '/index',
    component: Index,
    icon: 'medical',
    text: '首页'
}, {
    path: '/consultation',
    component: Consultation,
    icon: 'platform',
    text: '医疗咨询'
}, {
    path: '/search',
    component: Search,
    icon: 'cart',
    text: '医疗检索'
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
            window.location.replace('/index');
        }
    }, [])
    return (
        <div className="page-of-main">
            <div className="main-m-container">
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/profile" component={Profile} />
                    {/* <Route path="/cart" component={Cart} /> */}
                    <Route path="/consultation" component={Consultation} />
                    <Route path="/search" component={Search} />
                </Switch>
            </div>
            {/* <Logo type={'small'}></Logo> */}
            <NavfooterContext.Provider value={navList}>
                <Navfooter></Navfooter>
            </NavfooterContext.Provider>
        </div>
    )
}
