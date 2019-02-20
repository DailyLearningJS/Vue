const path = require('path')
const webpack = require('webpack')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'http://weijiyang.github.io/' : '/',
  devServer: {
    open: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      let arr = [
        new webpack.DllReferencePlugin({
          context: process.cwd(),
          manifest: require('./public/vendor/vendor-manifest.json')
        }),
        new HtmlWebpackIncludeAssetsPlugin({
          assets: [path.posix.join('./vendor/dll.lib.js')],
          hash: true,
          append: false
        })
      ]
      config.plugins = config.plugins.concat(arr)
      console.log('正在调用 生产模式打包配置...')
    } else {
      console.log('正在调用 开发模式打包配置...')
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DllReferencePlugin({
  //       context: process.cwd(),
  //       manifest: require('./public/vendor/vendor-manifest.json')
  //     }),
  //     new HtmlWebpackIncludeAssetsPlugin({
  //       assets: [path.posix.join('./vendor/dll.lib.js')],
  //       hash: true,
  //       append: false
  //     })
  //   ]
  // }
}
