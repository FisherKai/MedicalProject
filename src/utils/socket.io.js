/**
 * socket的封装
 */
import io from 'socket.io-client';

/**
 * 获取token作为用户会话唯一标识
 */
const user_token = localStorage.getItem('token');
let IO;
IO = io(`ws://127.0.0.1:4000?id=${user_token}`);
if (user_token) {
    // 创建socketio链接
    IO.connect();
}

export default IO;