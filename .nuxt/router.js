import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1915b4fa = () => interopDefault(import('..\\pages\\ranking\\index.vue' /* webpackChunkName: "pages/ranking/index" */))
const _715444f2 = () => interopDefault(import('..\\pages\\recruit\\index.vue' /* webpackChunkName: "pages/recruit/index" */))
const _35fc72ea = () => interopDefault(import('..\\pages\\template\\index.vue' /* webpackChunkName: "pages/template/index" */))
const _bc58f7e8 = () => interopDefault(import('..\\pages\\tool\\index.vue' /* webpackChunkName: "pages/tool/index" */))
const _5527d7e1 = () => interopDefault(import('..\\pages\\topic\\index.vue' /* webpackChunkName: "pages/topic/index" */))
const _22b2dbda = () => interopDefault(import('..\\pages\\recruit\\_id.vue' /* webpackChunkName: "pages/recruit/_id" */))
const _71fdc1af = () => interopDefault(import('..\\pages\\template\\_tag\\index.vue' /* webpackChunkName: "pages/template/_tag/index" */))
const _584b1974 = () => interopDefault(import('..\\pages\\tool\\_id.vue' /* webpackChunkName: "pages/tool/_id" */))
const _6adc5e89 = () => interopDefault(import('..\\pages\\topic\\_id.vue' /* webpackChunkName: "pages/topic/_id" */))
const _72c21d17 = () => interopDefault(import('..\\pages\\template\\_tag\\p\\_tagPage.vue' /* webpackChunkName: "pages/template/_tag/p/_tagPage" */))
const _5fc33852 = () => interopDefault(import('..\\pages\\template\\_tag\\_id.vue' /* webpackChunkName: "pages/template/_tag/_id" */))
const _5dc068b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ranking",
    component: _1915b4fa,
    name: "ranking"
  }, {
    path: "/recruit",
    component: _715444f2,
    name: "recruit"
  }, {
    path: "/template",
    component: _35fc72ea,
    name: "template"
  }, {
    path: "/tool",
    component: _bc58f7e8,
    name: "tool"
  }, {
    path: "/topic",
    component: _5527d7e1,
    name: "topic"
  }, {
    path: "/recruit/:id",
    component: _22b2dbda,
    name: "recruit-id"
  }, {
    path: "/template/:tag",
    component: _71fdc1af,
    name: "template-tag"
  }, {
    path: "/tool/:id",
    component: _584b1974,
    name: "tool-id"
  }, {
    path: "/topic/:id",
    component: _6adc5e89,
    name: "topic-id"
  }, {
    path: "/template/:tag/p/:tagPage?",
    component: _72c21d17,
    name: "template-tag-p-tagPage"
  }, {
    path: "/template/:tag/:id",
    component: _5fc33852,
    name: "template-tag-id"
  }, {
    path: "/",
    component: _5dc068b8,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
