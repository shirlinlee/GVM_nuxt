  
const { resolve } = require('path');

export default {
  router: {
    base: '/GVM_dist/'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  // router: {
  //   base: '/GVM_dist/'
  // },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700|Oswald:500&display=swap' }
    ]
   
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/reset.css',
    'swiper/dist/css/swiper.css',
    '~/assets/css/reset.css',
    '~/assets/css/animate.css'

  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
    {
      src: '~/plugins/vue-swiper.js',
      ssr: false
    },
    { src: '~plugins/media.js', 
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
 
  },
}
