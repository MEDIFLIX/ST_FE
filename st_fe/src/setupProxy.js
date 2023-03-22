const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://13.124.233.9:8080/',
            changeOrigin: true,
        })
    );
};