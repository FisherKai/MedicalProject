/**
 * 首页
 */
import React, { useEffect } from 'react';
import { SearchBar, Carousel, WhiteSpace, Grid } from 'antd-mobile';

import './home.less';

// 获取轮播组件需要的图片资源
const carouselList = ['Carousel1', 'Carousel2', 'Carousel3'];


export default function Home() {
    // eslint-disable-next-line
    useEffect(async () => {
        console.log(2312321);
    })

    return (
        <div className="page-of-home">
            <div className="home-of-location">
                {/* todo */}
                获取位置信息
            </div>
            {/* 导航栏 */}
            <SearchBar placeholder="搜索需要的商品"></SearchBar>
            <WhiteSpace size="sm"></WhiteSpace >
            {/* 轮播图 */}
            <div className="home-of-carousel">
                <Carousel
                    autoplay
                    infinite
                >
                    {carouselList.map((val, index) => (
                        <img
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
            </div>

            {/* 类目 */}
            <div>
                <Grid data={[]} isCarousel onClick={_el => console.log(_el)} />
            </div>
        </div>
    )
}
