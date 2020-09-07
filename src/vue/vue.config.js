const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('@public',resolve('public'))
    },
    publicPath: './',
    devServer: {
        before: function(app, server) {
            app.get(/reurl\/.*/, function(req, res) {
                var _url = req.originalUrl.replace('reurl', '#');
                res.redirect(302, _url);
            });
        },
        proxy: {
            '/sapi': {   // '/sapi':匹配项
                // target: 'http://dev.sapi.xbom.qihoo.net:9360',     // 接口的域名
                // target: 'http://tsz.bom.qihoo.net:9090',     // 接口的域名
                target: 'http://127.0.0.1:9090',     // 接口的域名
                ws: true, // 是否启用websockets
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: false, // 默认false，是否需要改变原始主机头为目标URL
                // pathRewrite: {  // 如果接口本身没有/api需要通过pathRewrite来重写了地址
                //   '^sapi': ''
                // }
            },
            // '/vlog': {   // '/sapi':匹配项
            //     // target: 'http://dev.sapi.xbom.qihoo.net:9360',     // 接口的域名
            //     // target: 'http://tsz.bom.qihoo.net:9090',     // 接口的域名
            //     target: 'http://lhw.bom.qihoo.net',     // 接口的域名
            //     // ws: true, // 是否启用websockets
            //     // secure: false,  // 如果是https接口，需要配置这个参数
            //     changeOrigin: false, // 默认false，是否需要改变原始主机头为目标URL
            //     // pathRewrite: {  // 如果接口本身没有/api需要通过pathRewrite来重写了地址
            //     //   '^sapi': ''
            //     // }
            // },
            // '/reurl': {
            //     target: 'http://127.0.0.1:8098',
            //     changeOrigin: false,
            //     pathRewrite: {  // 如果接口本身没有/api需要通过pathRewrite来重写了地址
            //       '^reurl': '#',
            //     }
            // }
        },
        port: 8098,
        disableHostCheck: true, //  新增该配置项
    },
    pwa:{
        iconPaths:{
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
}
