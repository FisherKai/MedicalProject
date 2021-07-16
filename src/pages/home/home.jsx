/**
 * 首页
 */
import React, { useEffect } from 'react';
import { SearchBar, Carousel, WhiteSpace, Grid, WingBlank } from 'antd-mobile';

import './home.less';

// 获取轮播组件需要的图片资源
const carouselList = ['Carousel1', 'Carousel2', 'Carousel3'];

// 类目资源定义
const gridList = [{
    icon: require(`../../assets/icon/merchandise.png`),
    text: '类目1'
}, {
    icon: require(`../../assets/icon/merchandise.png`),
    text: '类目2'
}, {
    icon: require(`../../assets/icon/merchandise.png`),
    text: '类目3'
}, {
    icon: require(`../../assets/icon/merchandise.png`),
    text: '类目4'
}, {
    icon: require(`../../assets/icon/merchandise.png`),
    text: '类目5'
}, {
    icon: require(`../../assets/icon/merchandise.png`),
    text: '类目6'
}]


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
            <WingBlank size="sm">
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
            </WingBlank>

            <WhiteSpace size="sm"></WhiteSpace>

            {/* 类目 */}
            <WingBlank size="sm">
                <Grid data={gridList}
                    isCarousel
                    hasLine
                    onClick={_el => console.log(_el)}
                />
            </WingBlank>

            <WhiteSpace size="sm"></WhiteSpace>

            <WingBlank size="sm" className="home-of-recommend">
                <Carousel className="my-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                    speed={200}
                    autoplayInterval={1000}
                    resetAutoplay={false}
                >
                    {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                        <div className="v-item" key={type}>{type}</div>
                    ))}
                </Carousel>
                <div>新品推荐</div>
            </WingBlank>
        </div>
    )
}
