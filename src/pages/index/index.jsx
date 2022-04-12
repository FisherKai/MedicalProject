/**
 * 首页
 */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { SearchBar, Carousel, WhiteSpace, Grid, WingBlank } from 'antd-mobile';
import moment from 'moment';
import AMapLoader from '@amap/amap-jsapi-loader';
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
    let map = {};
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
        });
    }, []);

    useLayoutEffect(() => {
        AMapLoader.load({
            key: "9f2712846e9a57168c282257a38bfeab",                     // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: [''],               // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap) => {
            map = new AMap.Map("container", { //设置地图容器id
                viewMode: "2D",         //是否为3D地图模式
                zoom: 13,                //初始化地图级别
            });
            // if (!(Object.prototype.toString.call(map) === '[object Object]' && JSON.stringify(map) === '{}')) {
            AMap.plugin(["AMap.PlaceSearch"], function () {
                //构造地点查询类
                var placeSearch = new AMap.PlaceSearch({
                    pageSize: 5, // 单页显示结果条数
                    pageIndex: 1, // 页码
                    city: "420100", // 兴趣点城市
                    citylimit: true,  //是否强制限制在设置的城市内搜索
                    map: map, // 展现结果的地图实例
                    panel: "panel", // 结果列表将在此容器中进行展示。
                    autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                });
                //关键字查询
                placeSearch.search('医院', function (res) {
                    console.log(arguments);
                });
            });
            // }
        }).catch(e => {
            console.log(e);
        })
    }, []);

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
            <WingBlank size="sm">
                <div>
                    <div id="container"></div>
                    <div id="panel"></div>
                </div>
            </WingBlank>
        </div>
    )
}
