import React, { useEffect, useState } from 'react';
import { Button, Toast } from 'antd-mobile';
import Img from '../../assets/images/background-1.png';
import { register } from '../../api/api';
import './register.less';

const Register = () => {
    let [username, setUsername] = useState(),
        [password, setPassword] = useState(),
        [confirmPassword, setConfirmPassword] = useState();

    const toRegister = async () => {
        // 校验
        if (!username || !password || !confirmPassword) {
            Toast.fail('参数不能为空', 1);
        } else if (username.length < 6) {
            Toast.fail('用户名不得小于6位', 1);
        } else if (password.length < 6) {
            Toast.fail('密码不得小于6位', 1);
        } else if (password != confirmPassword) {
            Toast.fail('密码与确认密码不一致', 1);
        }
        let res = await register(username, password);
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            window.location.replace('/');
        } else {
            Toast.fail(res.msg, 1);
        }
    }

    return (
        <div className="pages-of-register">
            <img src={Img} className="register-u-logo" />
            <div className="register-m-container">
                <input type="text" placeholder="请输入用户名" onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" placeholder="请输入密码" onChange={(e) => { setPassword(e.target.value) }} />
                <input type="password" placeholder="请确认密码" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                <Button type="primary" onClick={toRegister}>注册</Button>
            </div>
        </div>
    );
}

export default Register;
