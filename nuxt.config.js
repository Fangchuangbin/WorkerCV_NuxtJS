export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '极速简历 WorkerCV - HR推荐智能简历工具,实习生简历模板,求职简历模板下载',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '极速简历,简历模板工具,求职简历模板,实习生简历模板' },
      { hid: 'description', name: 'description', content: '极速简历WorkerCV提供各行业求职简历模板免费下载,是一个专业的智能简历制作工具.还有智能简历优化建议和求职简历定制服务,以及大量简历制作攻略和求职攻略.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { src: '//cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js' },
      { src: '//cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
      { src: '//cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js' },
      { src: '/js/main.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
