import fa from 'vuetify/lib/locale/fa'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    host: process.env.NUXT_HOST || 'localhost', // default: localhost
    port: process.env.NUXT_PORT || '3000', // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - attendance-tracker',
    title: 'attendance-tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/auth-next',
  ],

  router: {
    middleware: ['auth'],
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'response.accessToken',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'response',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/employee/login-register', method: 'post' },
          logout: false,
          user: { url: '/employee/profile', method: 'get' },
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/dashboard',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: true,
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    breakpoint: {
      mobileBreakpoint: 'sm', // This is equivalent to a value of 960
    },
    lang: {
      locales: { fa },
      current: 'fa',
    },
    theme: {
      themes: {
        light: {},
      },
    },
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: `http://${process.env.API_HOST}:${process.env.API_PORT}${process.env.API_PREFIX}`,
  //   },
  // },

  // privateRuntimeConfig: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
