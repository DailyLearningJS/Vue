const path = require('path')
const webpack = require('webpack')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
module.exports = {
  configureWebpack: {
    devServer: {
      open: true
    },
    plugins: [
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
  }
}
