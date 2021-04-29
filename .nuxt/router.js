import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8ae141f0 = () => interopDefault(import('..\\pages\\ranking\\index.vue' /* webpackChunkName: "pages/ranking/index" */))
const _12cdef00 = () => interopDefault(import('..\\pages\\recruit\\index.vue' /* webpackChunkName: "pages/recruit/index" */))
const _788feac8 = () => interopDefault(import('..\\pages\\template\\index.vue' /* webpackChunkName: "pages/template/index" */))
const _013a7684 = () => interopDefault(import('..\\pages\\tool\\index.vue' /* webpackChunkName: "pages/tool/index" */))
const _acfea522 = () => interopDefault(import('..\\pages\\topic\\index.vue' /* webpackChunkName: "pages/topic/index" */))
const _770bb168 = () => interopDefault(import('..\\pages\\recruit\\_id.vue' /* webpackChunkName: "pages/recruit/_id" */))
const _1c814be1 = () => interopDefault(import('..\\pages\\template\\_tag\\index.vue' /* webpackChunkName: "pages/template/_tag/index" */))
const _61b6dea6 = () => interopDefault(import('..\\pages\\tool\\_id.vue' /* webpackChunkName: "pages/tool/_id" */))
const _e22d80d2 = () => interopDefault(import('..\\pages\\topic\\_id.vue' /* webpackChunkName: "pages/topic/_id" */))
const _5fedb9c9 = () => interopDefault(import('..\\pages\\template\\_tag\\p\\_tagPage.vue' /* webpackChunkName: "pages/template/_tag/p/_tagPage" */))
const _6202d289 = () => interopDefault(import('..\\pages\\template\\_tag\\_id.vue' /* webpackChunkName: "pages/template/_tag/_id" */))
const _5891f9d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _8ae141f0,
    name: "ranking"
  }, {
    path: "/recruit",
    component: _12cdef00,
    name: "recruit"
  }, {
    path: "/template",
    component: _788feac8,
    name: "template"
  }, {
    path: "/tool",
    component: _013a7684,
    name: "tool"
  }, {
    path: "/topic",
    component: _acfea522,
    name: "topic"
  }, {
    path: "/recruit/:id",
    component: _770bb168,
    name: "recruit-id"
  }, {
    path: "/template/:tag",
    component: _1c814be1,
    name: "template-tag"
  }, {
    path: "/tool/:id",
    component: _61b6dea6,
    name: "tool-id"
  }, {
    path: "/topic/:id",
    component: _e22d80d2,
    name: "topic-id"
  }, {
    path: "/template/:tag/p/:tagPage?",
    component: _5fedb9c9,
    name: "template-tag-p-tagPage"
  }, {
    path: "/template/:tag/:id",
    component: _6202d289,
    name: "template-tag-id"
  }, {
    path: "/",
    component: _5891f9d6,
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
