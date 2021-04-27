import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f9e275b = () => interopDefault(import('..\\pages\\ranking\\index.vue' /* webpackChunkName: "pages/ranking/index" */))
const _9046915a = () => interopDefault(import('..\\pages\\recruit\\index.vue' /* webpackChunkName: "pages/recruit/index" */))
const _7efb66ae = () => interopDefault(import('..\\pages\\template\\index.vue' /* webpackChunkName: "pages/template/index" */))
const _86dbd56a = () => interopDefault(import('..\\pages\\tool\\index.vue' /* webpackChunkName: "pages/tool/index" */))
const _db8922fc = () => interopDefault(import('..\\pages\\topic\\index.vue' /* webpackChunkName: "pages/topic/index" */))
const _5fc6727b = () => interopDefault(import('..\\pages\\recruit\\_id.vue' /* webpackChunkName: "pages/recruit/_id" */))
const _3679dfa4 = () => interopDefault(import('..\\pages\\template\\_tag\\index.vue' /* webpackChunkName: "pages/template/_tag/index" */))
const _68aa231a = () => interopDefault(import('..\\pages\\tool\\_id.vue' /* webpackChunkName: "pages/tool/_id" */))
const _6377296a = () => interopDefault(import('..\\pages\\topic\\_id.vue' /* webpackChunkName: "pages/topic/_id" */))
const _620c5056 = () => interopDefault(import('..\\pages\\template\\_tag\\p\\_tagPage.vue' /* webpackChunkName: "pages/template/_tag/p/_tagPage" */))
const _e6d973d4 = () => interopDefault(import('..\\pages\\template\\_tag\\_id.vue' /* webpackChunkName: "pages/template/_tag/_id" */))
const _85100fba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5f9e275b,
    name: "ranking"
  }, {
    path: "/recruit",
    component: _9046915a,
    name: "recruit"
  }, {
    path: "/template",
    component: _7efb66ae,
    name: "template"
  }, {
    path: "/tool",
    component: _86dbd56a,
    name: "tool"
  }, {
    path: "/topic",
    component: _db8922fc,
    name: "topic"
  }, {
    path: "/recruit/:id",
    component: _5fc6727b,
    name: "recruit-id"
  }, {
    path: "/template/:tag",
    component: _3679dfa4,
    name: "template-tag"
  }, {
    path: "/tool/:id",
    component: _68aa231a,
    name: "tool-id"
  }, {
    path: "/topic/:id",
    component: _6377296a,
    name: "topic-id"
  }, {
    path: "/template/:tag/p/:tagPage?",
    component: _620c5056,
    name: "template-tag-p-tagPage"
  }, {
    path: "/template/:tag/:id",
    component: _e6d973d4,
    name: "template-tag-id"
  }, {
    path: "/",
    component: _85100fba,
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
