const { override, fixBabelImports, addLessLoader, addPostcssPlugins, overrideDevServer } = require('customize-cra')
const { resolve } = require('path')

// 打包配置
// const addCustomize = () => config => {
//   config.resolve.alias = {
//     ...config.resolve.alias,
//     '@': resolve(__dirname, './src')
//   }
//   if (process.env.NODE_ENV === 'production') {
//     // 关闭sourceMap
//     config.devtool = false;
//     // 配置打包后的文件位置
//     config.output.path = __dirname + '../dist/demo/';
//     config.output.publicPath = './demo';
//     // 添加js打包gzip配置
//     config.plugins.push(
//       new CompressionWebpackPlugin({
//         test: /\.js$|\.css$/,
//         threshold: 1024,
//       }),
//     )
//   }
//   return config;
// }
// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    port: '7099',
    // 服务开启gzip
    compress: true,
    clientLogLevel: 'warning',
    disableHostCheck: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      }
    }
  }
}
module.exports = {
  // webpack: override(
  //   fixBabelImports('import', {
  //     libraryName: 'antd-mobile',
  //     style: 'css',
  //   }),
  //   addLessLoader(),
  //   addCustomize(),
  // ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}