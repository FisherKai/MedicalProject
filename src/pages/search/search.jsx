/**
 * 咨询页
 */
import { NavBar, SearchBar, Card, WhiteSpace } from 'antd-mobile';
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts/lib/echarts.js'
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
import { GraphChart } from 'echarts/charts';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import axios from 'axios';
import './search.less';

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    GraphChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);
let option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [
                {
                    name: 'Node 1',
                    x: 300,
                    y: 300
                },
                {
                    name: 'Node 2',
                    x: 800,
                    y: 300
                },
                {
                    name: 'Node 3',
                    x: 550,
                    y: 100
                },
                {
                    name: 'Node 4',
                    x: 550,
                    y: 500
                }
            ],
            // links: [],
            links: [
                {
                    source: 'Node 1',
                    target: 'Node 2',
                },
                {
                    source: 'Node 2',
                    target: 'Node 1',
                },
                {
                    source: 'Node 1',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 4'
                },
                {
                    source: 'Node 1',
                    target: 'Node 4'
                }
            ],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};
export default function Consultation() {
    let [value, setValue] = useState('');
    const onChange = (value) => {
        setValue(value);
    };

    const onSubmit = () => {
        axios.get(`http://192.168.0.103:8868/getKnowledge?name=${value}`).then(res => {
            const data = res.data.content.result;
            let dataList = [value], links = [];
            data.forEach(item => {
                let str = item.str;
                str = str.replaceAll(')', '').replaceAll('(', '').replaceAll('[', '').replaceAll(']', '').replaceAll(':', '')
                    .replaceAll('{', '').replaceAll('}', '').replaceAll('>', '')
                let itemList = str.split('-');
                dataList.push(itemList[2]);
                links.push({
                    source: itemList[2],
                    target: value
                })
            })
            let list = Array.from(new Set(dataList))
            let resss = [];
            list.forEach((item, index) => {
                if (index === 0) {
                    resss.push({
                        name: item,
                        x: 180, y: 300
                    })
                } else {
                    resss.push({
                        name: item,
                        x: Math.random() * 345,
                        y: Math.random() * 600

                    })
                }

            })
            const chartDom = document.getElementById('main');
            let myChart = echarts.init(chartDom);
            option.series[0].data = resss;
            option.series[0].links = links;
            console.log(option.series[0].data, option.series[0].links);
            if (option) {
                setTimeout(() => {
                    myChart.setOption(option);
                })
            }
        })

    }

    return (
        <div className="page-of-consultation">
            <NavBar>知识检索</NavBar>
            <div className="consultation-of-container">
                <div className="item-header">
                    <SearchBar
                        value={value}
                        placeholder="请输入想要检索的知识"
                        onSubmit={onSubmit}
                        onClear={value => console.log(value, 'onClear')}
                        onCancel={() => setValue('')}
                        showCancelButton
                        onChange={onChange} />
                </div>
                <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                        <Card.Header
                            title="检索结果"
                            thumb={require(`../../assets/icon/customer-service.png`)}
                        />
                        <Card.Body>
                            <div id="main" style={{ width: '100%', height: '600px' }}></div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    )
}
