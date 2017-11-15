const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CoolBitx Trader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/bootstrap/dist/css/bootstrap.min.css' }
    ],
    script: [
      { src: '/jquery/dist/jquery.min.js' },
      { src: '/js/errorHandle.js' },
      { src: '/bootstrap/dist/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
  // plugins: [
  //   // set shortcut as global for bootstrap
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery',
  //     'window.jQuery': 'jquery'
  //   })
  // ]
  /**
   * Add font-awesome
   */
  // modules: [
  //   '@nuxtjs/font-awesome'
  // ]
}
