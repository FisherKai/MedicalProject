/**
 * 首页
 */
import React, { useEffect, useState } from 'react';
import { SearchBar, Carousel, WhiteSpace, Grid, WingBlank } from 'antd-mobile';
import moment from 'moment';
import { queryIconList, getAllNewList } from '../../api/api';

import './index.less';

// 获取轮播组件需要的图片资源
const carouselList = ['Carousel1', 'Carousel2', 'Carousel3'];

// 商品资源定义
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));


export default function Index() {
    const [iconList, seticonList] = useState([]);
    const [newList, setnewList] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        queryIconList().then(res => {
            let temp = [];
            res.data && res.data.forEach(item => {
                temp.push({
                    icon: item.icon_path,
                    text: item.text,
                    url: item.url
                })
            })
            seticonList(temp)
        })
        getAllNewList().then(res => {
            if (res && res.data) {
                console.log(res.data);
                setnewList(res.data);
            }
        })
    }, [])

    return (
        <div className="page-of-index">
            {/* 导航栏 */}
            <SearchBar placeholder="搜索需要的商品"></SearchBar>
            <WhiteSpace size="sm"></WhiteSpace >
            {/* 轮播图 */}
            <WingBlank size="sm">
                <Carousel
                    autoplay
                    infinite
                >
                    {carouselList.map((val, index) => (
                        <img
                            key={index}
                            src={require(`../../assets/images/${val}.png`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    ))}
                </Carousel>
            </WingBlank>

            <WhiteSpace size="sm"></WhiteSpace>

            {/* 类目 */}
            <WingBlank size="sm">
                <Grid data={iconList}
                    onClick={_el => window.location.href = _el.url}
                />
            </WingBlank>

            <WhiteSpace size="sm"></WhiteSpace>

            <WingBlank size="sm" className="index-of-recommend">
                <div>
                    <span className="u-tips">医药小提示:</span>
                    <Carousel className="my-carousel"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={true}
                        autoplay
                        infinite
                        speed={200}
                        autoplayInterval={1000}
                        resetAutoplay={false}
                    >
                        {newList.map((item, index) => (
                            <div className="v-item" key={item.id}>
                                <div className="title">{item.title}</div>
                                <div className="summary">{item.summary}</div>
                                <div className="createtime">{moment(item.createtime).format('yyyy-MM-DD HH:mm:ss')}</div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </WingBlank>

            <WhiteSpace size="sm"></WhiteSpace>

            {/* 商品区 */}
            {/* <WingBlank size="sm">
                <Grid data={data} columnNum={2} />
            </WingBlank> */}
        </div>
    )
}
