module.exports = {
  transpileDependencies: [],
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .uses.clear()
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  devServer: {
    host: '0.0.0.0'
  }
};
