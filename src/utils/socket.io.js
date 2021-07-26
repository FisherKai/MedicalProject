/**
 * socket的封装
 */
import io from 'socket.io-client';

/**
 * 获取token作为用户会话唯一标识
 */
const user_token = localStorage.getItem('token');
let IO;
if (user_token) {
    // 创建socketio链接
    IO = io(`ws://127.0.0.1:4000?id=${user_token}`);
    IO.connect();
} else {
    window.location.replace('/login');
}

export default IO;