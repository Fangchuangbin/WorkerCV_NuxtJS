<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-black">
      <a class="navbar-brand" href="/">极速简历 WorkerCV</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" ref="navbar">
          <li class="nav-item">
            <nuxt-link class="nav-link mx-md-1" to="/">首页</nuxt-link>
          </li>
          <li :class="['nav-item', 'dropdown', pathname == 'template'?'active':'']">
            <a class="nav-link dropdown-toggle mx-md-1" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              模板
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/template/">全部</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">行业</a>
              <a class="dropdown-item" href="#">职位</a>
              <a class="dropdown-item" href="#">高校</a>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link mx-md-1" to="/topic/">题库</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link mx-md-1" to="/recruit/">招聘</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link mx-md-1" to="/tool/">工具<svg t="1611136560411" class="ml-1 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4785" width="16" height="16"><path d="M965.76 576l-74.56-78.08a107.2 107.2 0 0 1-19.84-105.6l40.96-99.84a40.96 40.96 0 0 0-39.68-60.8l-107.84-0.64a107.2 107.2 0 0 1-88.64-60.48l-41.6-99.52a40.96 40.96 0 0 0-71.04-14.72l-78.08 74.24a107.2 107.2 0 0 1-105.6 19.84L280 109.76a40.96 40.96 0 0 0-60.8 39.68L216.96 256a107.2 107.2 0 0 1-60.48 88.64l-99.52 41.6a40.96 40.96 0 0 0-14.72 71.04l74.56 78.08a107.52 107.52 0 0 1 19.84 105.6L96 741.76a40.96 40.96 0 0 0 39.68 60.8l107.84 2.56A107.2 107.2 0 0 1 331.84 864l41.6 99.52a40.96 40.96 0 0 0 71.04 14.72l78.08-74.56a107.2 107.2 0 0 1 105.6-19.84l99.84 40.96a40.96 40.96 0 0 0 60.8-39.68l2.56-107.84a107.2 107.2 0 0 1 60.48-88.64l99.52-41.6a40.96 40.96 0 0 0 14.4-71.04z m-309.44 128c-18.56 3.2-43.2 0-79.36-34.56-25.28-24.96-102.72-118.08-154.88-181.12l37.76 187.52a73.92 73.92 0 0 1-1.92 39.68 51.84 51.84 0 0 1-65.6 29.12A64 64 0 0 1 352 686.72l-50.56-288A59.52 59.52 0 0 1 311.68 352a64 64 0 0 1 43.52-21.76A55.36 55.36 0 0 1 416 352c26.24 29.76 52.16 59.84 77.76 89.92 32 36.8 61.12 73.92 91.52 110.72l-39.04-195.52a64 64 0 0 1 3.2-37.12 48.64 48.64 0 0 1 39.04-32 52.8 52.8 0 0 1 40.96 9.28 71.36 71.36 0 0 1 24.64 47.04L704 630.72A55.68 55.68 0 0 1 656.32 704z" fill="#28a745" p-id="4786"></path></svg></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link mx-md-1" to="/ranking/">排行榜<svg t="1611136414571" class="ml-1 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2590" width="16" height="16"><path d="M536.2112 0c27.362133 49.8048 44.4416 116.8768 44.4416 191.125333 0 153.2928-71.7184 277.597867-160.247467 277.597867-68.992 0-127.291733-76.002133-149.870933-181.994667C190.372267 399.940267 122.856533 534.045867 122.856533 666.773333 122.856533 864.0768 297.098667 1024 511.9808 1024c214.920533 0 389.162667-159.9232 389.162667-357.226667C901.1392 308.3776 550.5216 11.968 536.2112 0L536.2112 0zM515.197867 938.615467c-131.0976 0-170.218667-101.508267-163.464533-142.446933 13.4656-81.582933 94.0288-94.894933 154.88-94.894933 144.8192 0 203.1232-150.754133 206.5664-189.8368C713.175467 511.4368 765.314133 938.615467 515.197867 938.615467L515.197867 938.615467z" p-id="2591" fill="#dc3545"></path></svg></nuxt-link>
          </li>
          <li class="nav-item dropdown" data-category="user">
            <a class="nav-link mx-md-1 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              用户中心
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#userLoginModal">登录</a>
              <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#userRegisterModal">注册</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">重置密码</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="请输入关键字..." aria-label="请输入关键字...">
          <button class="btn btn-success my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </nav>
    <!-- 登录 -->
    <div class="modal fade mt-5" id="userLoginModal" tabindex="-1" aria-labelledby="userLoginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="userLoginModalLabel">用户登录</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="phone">手机号码</label>
              <input type="text" class="form-control" v-model="userLogin.phone" placeholder="请输入手机号码...">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="userLogin.password" placeholder="请输入密码...">
              <small id="emailHelp" class="form-text text-muted">忘记密码？<a class="text-body" href="#">重置密码</a></small>
            </div>
            <div class="form-check">
              <input type="checkbox" checked class="form-check-input" id="rememberPassword">
              <label class="form-check-label font-size-14" for="rememberPassword">保持登录</label>
            </div>
          </div>
          <div class="modal-footer justify-content-left">
            <button type="button" class="btn btn-dark" @click="login()">登录</button>
            <button type="button" class="btn btn-outline-dark" id="showUserRegisterModal">前往注册</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div class="modal fade mt-5" id="userRegisterModal" tabindex="-1" aria-labelledby="userRegisterModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="userRegisterModalLabel">用户注册</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="phone">手机号码</label>
              <input type="text" class="form-control" v-model="userRegister.phone" placeholder="请输入手机号码...">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="userRegister.firstPassword" placeholder="请输入密码...">
            </div>
            <div class="form-group">
              <label for="password">确认密码</label>
              <input type="password" class="form-control" v-model="userRegister.secondPassword" placeholder="请再次输入密码...">
            </div>
            <div class="form-check">
              <input type="checkbox" checked class="form-check-input" id="rememberPassword" @click="rememberPassword = !rememberPassword">
              <label class="form-check-label font-size-14" for="rememberPassword">立刻登录</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="register()">注册</button>
            <button type="button" class="btn btn-outline-dark" id="openUserLoginModal">返回登录</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { userLogin } from '@/api/user'

export default {
  data() {
    return {
      pathname: '', // 路径名
      userLogin: { //登录
        phone: '',
        password: ''
      },
      userRegister: { // 注册
        phone: '',
        firstPassword: '',
        secondPassword: ''
      }
    }
  },
  mounted() {
    if(process.client) { this.pathname = document.location.pathname.split('/')[1] }
  },
  methods: {
    // 登录
    login() {
      console.log(this.userLogin.phone)
      userLogin({
        phone: this.userLogin.phone,
        password: this.userLogin.password
      }).then((res) => {
        if(res.code == 20000) {
          alert('登录成功');
        }else{
          alert('账号或密码错误');
        }
      }).catch(err => {
        console.log(err)
      })
    },

    //用户注册
    register() {
      console.log(this.userRegister);
    }
  }
}
</script>