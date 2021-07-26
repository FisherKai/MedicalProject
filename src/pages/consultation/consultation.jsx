/**
 * 咨询页
 */
import { NavBar } from 'antd-mobile';
import React, { useState } from 'react';
import { sendMsg, receiveMsg } from '../../api/api';
import './consultation.less';

// 从缓存中取聊天记录
let chatData = localStorage.getItem('chatData') || [],
    container;
console.log(chatData);

setTimeout(() => {
    receiveMsg(function (data) {
        let node = document.createElement('p');
        node.classList.add('server');
        node.innerText = data.data;
        container.appendChild(node);
        chatData.push(data);
        container.scrollTop = container.scrollHeight;
    });
}, 0)


export default function Consultation() {
    // let [chat_data, setChatData] = useState([]);
    let [iconName, setIconName] = useState('voice');
    let [inputData, setInputData] = useState('');

    // useEffect(() => {
    //     receiveMsg(function (data) {
    //         setChatData([...chat_data, data])
    //     });
    // })

    // 初始化表情列表数据
    // eslint-disable-next-line
    const emojis = ['😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀'
        , '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣'
        , '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣'
        , '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣']
    return (
        <div className="page-of-consultation">
            <NavBar>正在咨询......</NavBar>
            <div className="consultation-of-container" ref={(node) => {
                container = node;
            }}>
                {/* {
                    chatData && chatData.length > 0 && chatData.map((item, index) => {
                        if (item.from === 'client') {
                            return <p className="client">{item.data}</p>
                        } else {
                            return <p className="server">{item.data}</p>
                        }
                    })
                } */}
            </div>
            <div className="consultation-of-msg">
                <div className="msg-of-icon" onClick={() => {
                    // 更改为键盘类型的图片
                    if (iconName === 'voice') {
                        setIconName('keyboard');
                    } else {
                        setIconName('voice');
                    }
                }}>
                    <img src={require(`../../assets/icon/${iconName}.png`)} alt="voice" />
                </div>
                {iconName === 'voice' ? <input type="text" name="" id="" className="msg-of-input" onChange={(e) => {
                    setInputData(e.target.value);
                }} /> :
                    <button className="msg-of-input">点击</button>
                }
                <button className="msg-of-btn" onClick={() => {
                    if (!inputData) return;
                    sendMsg({ from: 'client', to: 'server', data: inputData });
                    // setChatData([...chat_data, { from: 'client', to: 'server', data: inputData }])
                    let node = document.createElement('p');
                    node.classList.add('client');
                    node.innerText = inputData;
                    container.appendChild(node);
                    container.scrollTop = container.scrollHeight;
                    // 这里置空不起作用   离谱
                    setInputData('');
                    chatData.push({ from: 'client', to: 'server', data: inputData });
                }}>发送</button>
            </div>
        </div>
    )
}
