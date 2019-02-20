const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const vendors = [
  'vue',
  'vue-router',
  'vuex',
  'lodash'
]

module.exports = {
  entry: {
    lib: vendors
  },
  output: {
    path: path.resolve(__dirname, 'public/vendor'),
    filename: 'dll.[name].js',
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin('public/vendor/*.*'),
    new webpack.DllPlugin({
      context: path.resolve(__dirname, '../dist/js'),
      path: path.resolve(__dirname, 'public/vendor', 'vendor-manifest.json'),
      name: '[name]'
    })
  ]
}
