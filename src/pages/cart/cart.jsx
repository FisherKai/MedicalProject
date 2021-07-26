/**
 * 购物车
 */
import React from 'react';
import { NavBar } from 'antd-mobile';
import './cart.less';

export default function Cart() {
    return (
        <div className="page-of-cart">
            <NavBar mode="light">购物车</NavBar>
            <div className="cart-of-container"></div>
            <div className="cart-of-bottom">
                <p className="cart-of-all">
                    <input type="radio" name="cart-of-allSelect" />
                    <label htmlFor="cart-of-allSelect">全选</label>
                </p>
                <div className="cart-of-amount">
                    <p className="cart-of-total">总计: <span className="u-num">￥0.00</span></p>
                    <p className="cart-of-discount">已优惠: <span className="u-num">￥0.00</span></p>
                </div>
                <button className="cart-of-submit">提交</button>
            </div>
        </div>
    )
}
