module.exports = (api) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.module
        .rule('pug')
        .test(/\.pug$/)
        .use('pug-plain-loader')
        .loader('pug-plain-loader')
        .end()   
  })
}
