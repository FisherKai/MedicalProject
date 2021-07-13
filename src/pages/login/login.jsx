import React from 'react';
import { Button } from 'antd-mobile';
import Img from '../../assets/images/background-1.png';
import './login.less';

const Login = () => {
    return (
        <div className="pages-of-login">
            <img src={Img} className="login-u-logo" />
            <div className="login-m-container">
                <input type="text" placeholder="请输入用户名" />
                <input type="password" placeholder="请输入密码" />
                <Button type="primary" onClick={()=>{
                    window.location.replace('/');
                }}>登录</Button>
                <a className="login-to-register" href="/register">去注册</a>
            </div>
        </div>
    );
}

export default Login;
