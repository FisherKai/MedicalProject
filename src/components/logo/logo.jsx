import React from 'react';
import logoImg from '../../assets/images/logo.jpg';
import './logo.less';

export default function Logo() {
    return (
        <div className="componet-of-logo">
            <img src={logoImg} alt="logo" />
        </div>
    )
}
