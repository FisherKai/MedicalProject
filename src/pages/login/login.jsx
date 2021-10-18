/**
 * 登录页
 */
import React, { useState, useLayoutEffect } from 'react';
import { Button, Toast } from 'antd-mobile';
import Img from '../../assets/images/background-1.png';
import { login } from '../../api/api';
import './login.less';

const Login = () => {
    let [username, setUsername] = useState(),
        [password, setPassword] = useState();

    const toLogin = async () => {
        let res = await login(username, password);
        // 登录成功之后会获得token
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            window.location.replace('/');
        } else {
            Toast.fail(res.msg, 1);
        }
    }

    useLayoutEffect(() => {
        // 登录拦截
        let token = localStorage.getItem('token');
        if (token) {
            window.location.replace('/home');
        }
    },[])

    return (
        <div className="page-of-login">
            <img src={Img} className="login-u-logo" alt="logo"/>
            <div className="login-m-container">
                <input type="text" placeholder="请输入用户名" onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" placeholder="请输入密码" onChange={(e) => { setPassword(e.target.value) }} />
                <Button type="primary" onClick={toLogin}>登录</Button>
                <a className="login-to-register" href="/register">去注册</a>
            </div>
        </div>
    );
}

export default Login;
