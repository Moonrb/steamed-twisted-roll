const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理

module.exports = function(app) {
    app.use(proxy('/pc', {
        target: 'https://www.huajuanmall.com',
        host: 'www.huajuanmall.com',
        changeOrigin:true
    }));
};
