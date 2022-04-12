import ajax from './ajax';
import IO from '../utils/socket.io';

// 发送消息
export const sendMsg = ({ from, to, data }) => {
    IO.emit('sendMsg', { from, to, data })
}

// 接受消息
export const receiveMsg = (callBack) => {
    IO.on('receiveMsg', callBack);

}

export const login = async (username, password) => ajax('/user/login', { username, password }, 'POST');
export const register = async (username, password) => ajax('/user/register', { username, password }, 'POST');
export const getAllUser = async () => ajax('/index/getUser', {}, 'GET');
export const queryIconList = async () => ajax('/category/getIconList', {}, 'GET');
export const getAllNewList = async () => ajax('/newlist/getAllNewList', {});
// export const getAnswer = async (question) => getQuestionAnswer(question);