const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.config.js`);
  return webpackMerge(commonConfig, envConfig);
};