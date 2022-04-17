/**
 * 咨询页
 */
import { NavBar, InputItem, SearchBar, Card, WhiteSpace } from 'antd-mobile';
import React, { useState } from 'react';
import './search.less';


export default function Consultation() {
    let [value, setValue] = useState('');

    // useEffect(() => {
    //     receiveMsg(function (data) {
    //         setChatData([...chat_data, data])
    //     });
    // })
    const onChange = (value) => {
        setValue(value);
    };

    return (
        <div className="page-of-consultation">
            <NavBar>知识检索</NavBar>
            <div className="consultation-of-container">
                <div className="item-header">
                    <SearchBar
                        value={value}
                        placeholder="请输入想要检索的知识"
                        onSubmit={value => console.log(value, 'onSubmit')}
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
                            <div></div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    )
}
