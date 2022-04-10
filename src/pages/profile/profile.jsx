/**
 * 个人中心
 */
import React from 'react';
import { Button } from 'antd-mobile';
import './profile.less';

export default function Profile() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.replace('/login');
    }


    return (
        <div className="page-of-profile">
            <div className="header">
                <img src={require(`../../assets/images/logo.jpg`)}></img>
                <span>18375183097</span>
                {/* <button>药师指导</button> */}
            </div>
            {/* <div className="orders">
                <p>我的订单</p>
                <div className="container">
                    <div className="item">
                        <img src="" />
                        <span>待付款</span>
                    </div>
                    <div className="item">
                        <img src="" />
                        <span>待发货</span>
                    </div>
                    <div className="item">
                        <img src="" />
                        <span>待收货</span>
                    </div>
                    <div className="item">
                        <img src="" />
                        <span>待评价</span>
                    </div>
                </div>
            </div> */}

            {/* 退出按钮 */}
            <Button className="u-logout" type="warning" onClick={logout}>退出登录</Button>
        </div>
    )
}
