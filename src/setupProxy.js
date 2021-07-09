/**
 * 服务代理
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/HomeApp', { target: 'http://localhost:8088' }));
};