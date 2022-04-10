/**
 * 咨询页
 */
import { NavBar, InputItem, SearchBar, Card, WhiteSpace } from 'antd-mobile';
import React, { useState } from 'react';
import { sendMsg, receiveMsg } from '../../api/api';
import './search.less';


export default function Consultation() {
    let [value, setValue] = useState();

    // useEffect(() => {
    //     receiveMsg(function (data) {
    //         setChatData([...chat_data, data])
    //     });
    // })

    return (
        <div className="page-of-consultation">
            <NavBar>知识检索</NavBar>
            <div className="consultation-of-container">
                <div className="item-header">
                    {/* <div style={{ width: '300px' }}>
                        <InputItem
                            placeholder='请输入内容'
                            value={value}
                            onChange={val => {
                                setValue(val)
                            }}
                        />
                    </div> */}
                    <SearchBar placeholder="请输入想要检索的知识" />
                </div>
                <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                        <Card.Header
                            title="检索结果"
                            thumb={require(`../../assets/icon/customer-service.png`)}
                        />
                        <Card.Body>
                            <div>
                                <img src={require(`../../assets/images/search-result-1.png`)} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    )
}
