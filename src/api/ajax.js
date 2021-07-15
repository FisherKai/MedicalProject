import axios from 'axios';

const baseUrl = 'http://localhost:4000/medical-project/api';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = 'Bearer ' + token;
    return config;
})

//拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    window.location.replace('/login')
                    break;
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    })

export default async function ajax(url, data = {}, type = 'GET') {
    url = baseUrl + url
    if (type === 'GET') { // 发送GET请求
        // 拼请求参数串
        // data: {username: tom, password: 123}
        // paramStr: username=tom&password=123
        let paramStr = ''
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        })
        if (paramStr) {
            paramStr = paramStr.substring(0, paramStr.length - 1)
        }
        // 使用axios发get请求
        return await (await axios.get(url + '?' + paramStr)).data
    } else {// 发送POST请求
        // 使用axios发post请求
        return await (await axios.post(url, data)).data
    }
}