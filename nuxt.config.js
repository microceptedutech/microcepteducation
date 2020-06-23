
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mfavicon.svg' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext' },
    ],


  },
 
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
   '@/assets/css/styles.css',
   '@/assets/css/bootstrap.css',
   '@/assets/css/fontawesome-all.css',
   '@/assets/css/swiper.css',
   '@/assets/css/magnific-popup.css',
   '@/assets/css/styles.css',
  ],
  script:[
     { src:'~/assets/js/jquery.min.js'}, 
     { src:'~/assets/js/popper.min.js'}, 
     { src:'~/assets/js/bootstrap.min.js'}, 
     { src:'~/assets/js/jquery.easing.min.js'}, 
     { src:'~/assets/js/swiper.min.js'},
     { src:'~/assets/js/jquery.magnific-popup.js'}, 
     { src:'~/assets/js/validator.min.js'}, 
     { src:'~/assets/js/scripts.js'}, 
    ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{src:'~/plugins/element-ui',ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  
  
  moment: {
    locales: ['en']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
