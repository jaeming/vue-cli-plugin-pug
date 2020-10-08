module.exports = api => {
  api.chainWebpack(webpackConfig => {
    // Remove any existing rule added from a previous version of the plugin (npm uninstall/ yarn remove will remove the plugin, but leave behind the webpack rules)
    webpackConfig.module.rules.delete('pug')

    // Rules taken from: https://vue-loader.vuejs.org/guide/pre-processors.html#pug
    webpackConfig.module
      .rule('pug')
        .test(/\.pug$/)

        // this applies to <template lang="pug"> in Vue components
        .oneOf('vue-loader')
          .resourceQuery(/^\?vue/)
          .use('pug-plain')
            .loader(require.resolve('pug-plain-loader'))
            .end()
        .end()

        // this applies to pug imports inside JavaScript, i.e. .pug files
        .oneOf('raw-pug-files')
          .use('pug-raw')
            .loader(require.resolve('raw-loader'))
            .end()
          .use('pug-plain')
            .loader(require.resolve('pug-plain-loader'))
            .end()
        .end()
  })
}
