const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const fs = require('fs')

module.exports = merge(common, {
  // mode: 'development',
  // devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
})
