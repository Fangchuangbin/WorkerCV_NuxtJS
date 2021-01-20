<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="/">极速简历 WorkerCV</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link mx-md-1" href="/">首页</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-md-1" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              模板
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">全部</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">热门</a>
              <a class="dropdown-item" href="#">行业</a>
              <a class="dropdown-item" href="#">职位</a>
              <a class="dropdown-item" href="#">高校</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-md-1" href="#">题库</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-md-1" href="#">招聘</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-md-1" href="#">排行榜</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-md-1 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              用户中心
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">登录</a>
              <a class="dropdown-item" href="#">注册</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">重置密码</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="请输入关键字..." aria-label="请输入关键字...">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </nav>
  </header>
</template>
