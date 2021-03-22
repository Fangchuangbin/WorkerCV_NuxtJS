import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0117d169 = () => interopDefault(import('..\\pages\\ranking\\index.vue' /* webpackChunkName: "pages/ranking/index" */))
const _59566161 = () => interopDefault(import('..\\pages\\recruit\\index.vue' /* webpackChunkName: "pages/recruit/index" */))
const _4e3de45b = () => interopDefault(import('..\\pages\\template\\index.vue' /* webpackChunkName: "pages/template/index" */))
const _1a2155fd = () => interopDefault(import('..\\pages\\tool\\index.vue' /* webpackChunkName: "pages/tool/index" */))
const _32d777e0 = () => interopDefault(import('..\\pages\\topic\\index.vue' /* webpackChunkName: "pages/topic/index" */))
const _97c16fee = () => interopDefault(import('..\\pages\\recruit\\_id.vue' /* webpackChunkName: "pages/recruit/_id" */))
const _e172cb40 = () => interopDefault(import('..\\pages\\template\\_tag\\index.vue' /* webpackChunkName: "pages/template/_tag/index" */))
const _55d298b6 = () => interopDefault(import('..\\pages\\tool\\_id.vue' /* webpackChunkName: "pages/tool/_id" */))
const _f0f7eb10 = () => interopDefault(import('..\\pages\\topic\\_id.vue' /* webpackChunkName: "pages/topic/_id" */))
const _4f37ed08 = () => interopDefault(import('..\\pages\\template\\_tag\\p\\_tagPage.vue' /* webpackChunkName: "pages/template/_tag/p/_tagPage" */))
const _1e77b4c8 = () => interopDefault(import('..\\pages\\template\\_tag\\_id.vue' /* webpackChunkName: "pages/template/_tag/_id" */))
const _44ea2655 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0117d169,
    name: "ranking"
  }, {
    path: "/recruit",
    component: _59566161,
    name: "recruit"
  }, {
    path: "/template",
    component: _4e3de45b,
    name: "template"
  }, {
    path: "/tool",
    component: _1a2155fd,
    name: "tool"
  }, {
    path: "/topic",
    component: _32d777e0,
    name: "topic"
  }, {
    path: "/recruit/:id",
    component: _97c16fee,
    name: "recruit-id"
  }, {
    path: "/template/:tag",
    component: _e172cb40,
    name: "template-tag"
  }, {
    path: "/tool/:id",
    component: _55d298b6,
    name: "tool-id"
  }, {
    path: "/topic/:id",
    component: _f0f7eb10,
    name: "topic-id"
  }, {
    path: "/template/:tag/p/:tagPage?",
    component: _4f37ed08,
    name: "template-tag-p-tagPage"
  }, {
    path: "/template/:tag/:id",
    component: _1e77b4c8,
    name: "template-tag-id"
  }, {
    path: "/",
    component: _44ea2655,
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
