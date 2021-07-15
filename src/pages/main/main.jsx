/**
 * Main 主入口
 */
import React, { createContext } from 'react';

import Cart from '../cart/cart';
import Consultation from '../consultation/consultation';
import Home from '../home/home';
import Profile from '../profile/profile';

import Logo from '../../components/logo/logo';
import Navfooter from '../../components/nav-footer/nav-footer';

import { NavfooterContext } from '../../utils/context';


// 导航组件需要的信息
const navList = [{
    path: '/home',
    component: Home,
    icon: 'medical',
    text: '首页'
}, {
    path: '/profile',
    component: Profile,
    icon: 'user',
    text: '用户'
}, {
    path: '/cart',
    component: Cart,
    icon: 'cart',
    text: '购物车'
}, {
    path: '/consultation',
    component: Consultation,
    icon: 'platform',
    text: '医疗咨询'
}];

export default function Main() {

    return (
        <div>
            {/* <Logo type={'small'}></Logo> */}
            <NavfooterContext.Provider value={navList}>
                <Navfooter></Navfooter>
            </NavfooterContext.Provider>
        </div>
    )
}
