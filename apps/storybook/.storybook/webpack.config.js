const path = require('path');
const webpackConfig = require('@expo/webpack-config/webpack/webpack.common');
const merge = require('webpack-merge');

module.exports = function({ mode, config }, argv) {
  const expoConfig = webpackConfig(
    { [config.mode]: true, projectRoot: path.resolve(__dirname, '../') },
    argv
  );

  return merge(expoConfig, config);
};
