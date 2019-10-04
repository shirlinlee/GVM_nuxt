export default {
  // router: {
  //   base: '/GVM_dist/'
  // },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  // router: {
  //   base: '/GVM_dist/'
  // },
  env: {
    baseUrl: process.env.BASE_URL || ''
  },
  head: {
    title: '108年新時代人力資源管理策略系列論壇',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description',content: '臺灣企業面臨浪潮衝擊，企業經營者應該保持前瞻遠見，培養新時代人資管理者，才能因應數位時代洪流！' },
      { name: 'keyword', content: '人力資源,數位轉型,企業接班' },
      { property: 'og:title', content: '108年新時代人力資源管理策略系列論壇' },
      { property: 'og:description', content: '臺灣企業面臨浪潮衝擊，企業經營者應該保持前瞻遠見，培養新時代人資管理者，才能因應數位時代洪流！'},
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://newage_human.gvm.com.tw/'},
      { property: 'og:site_name', content: 'newage_human'},
      { property: 'og:image', content: '/facebook-share.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700|Oswald:500&display=swap' }
    ],
    script:[
      { src: '/js/media.js', 
        // mode: 'client',
        defer: true 
      }
    ],
   
  },
  noscript: [
    { innerHTML: '<img src="https://d5nxst8fruw4z.cloudfront.net/atrk.gif?account=IH0Jm1akKd60T3" style="display:none" height="1" width="1" alt="" />' }
  ],
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
    // { src: '~/static/js/media.js', 
    //   mode: 'client',
    //   defer: true 
    // }
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
  generate: {
    dir: (process.env.NODE_ENV === 'prod') ? 'dist/prod': 'dist/test'
  }
}
