import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import Img from '../../assets/images/background-1.png';
import './register.less';

const Register = () => {
    return (
        <div className="pages-of-register">
            <img src={Img} className="register-u-logo" />
            <div className="register-m-container">
                <input type="text" placeholder="请输入用户名" />
                <input type="password" placeholder="请输入密码" />
                <input type="password" placeholder="请确认密码" />
                <Button type="primary" onClick={()=>{
                    window.location.replace('/');
                }}>注册</Button>
            </div>
        </div>
    );
}

export default Register;
