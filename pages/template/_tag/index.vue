<template>
  <div id="__template_tag">
    <Header />
    <section class="bg-white shadow-sm pt-3 overflow-hidden template-tag-section-1">
      <div class="container px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb font-size-14 bg-white p-0 mb-3">
            <li class="breadcrumb-item"><a class="text-dark" href="#">首页</a></li>
            <li class="breadcrumb-item" aria-current="page"><a class="text-dark" href="#">模板</a></li>
            <li class="breadcrumb-item active" aria-current="page">应届生简历模板</li>
          </ol>
        </nav>
        <div class="input-group w-100 w-md-50">
          <input type="text" class="form-control" placeholder="请输入关键字..." aria-label="请输入关键字..." aria-describedby="templateSearch">
          <div class="input-group-append">
            <button class="btn btn-dark px-4 px-md-5" type="button" id="templateSearch">搜索</button>
          </div>
        </div>
      </div>
      <div class="container template-tags">
        <div class="row font-size-14 my-3">
          <div class="col-12">
            <p class="title float-left mr-1">热门：</p>
            <div class="tag-link float-left" :class="{ 'on': tagLink1 }">
              <a class="active" href="">应届生简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
            </div>
            <p @click="tagLinkButton($event, 1)" class="button">+ 更多</p>
          </div>
          <div class="col-12 d-none d-md-block">
            <p class="title float-left mr-1">推荐：</p>
            <div class="tag-link float-left" :class="{ 'on': tagLink2 }">
              <a href="">学生</a>
              <a href="">教师</a>
              <a href="">工程师</a>
              <a href="">银行</a>
              <a href="">房地产</a>
              <a href="">财务</a>
              <a href="">制造业</a>
              <a href="">汽车</a>
              <a href="">物流运输</a>
              <a href="">教育培训</a>
              <a href="">广告</a>
              <a href="">医药</a>
              <a href="">保险</a>
            </div>
            <p @click="tagLinkButton($event, 2)" class="button">+ 更多</p>
          </div>
          <div class="col-12 d-none d-md-block">
            <p class="title float-left mr-1">职位：</p>
            <div class="tag-link float-left" :class="{ 'on': tagLink3 }">
              <a href="">应届生简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
            </div>
            <p @click="tagLinkButton($event, 3)" class="button">+ 更多</p>
          </div>
          <div class="col-12 d-none d-md-block">
            <p class="title float-left mr-1">高校：</p>
            <div class="tag-link float-left" :class="{ 'on': tagLink4 }">
              <a href="">应届生简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
              <a href="">Java简历模板</a>
            </div>
            <p @click="tagLinkButton($event, 4)" class="button">+ 更多</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-3 overflow-hidden template-section-2">
      <div class="container tab-content" id="nav-tabContent">
        222
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramsId: this.$route.params.tag,
      tagLink1: false,
      tagLink2: false,
      tagLink3: false,
      tagLink4: false
    }
  },
  head() {
    return {
      title: '内容页 - 简历模板 - 极速简历 WorkerCV'
    }
  },
  mounted() {
    console.log(this.paramsId)
  },
  methods: {
    tagLinkButton(e, v){
      if(e.target.innerText == '+ 更多') {
        e.target.innerText = '^ 收回'
      }else{
        e.target.innerText = '+ 更多'
      }
      switch(v) {
        case 1: this.tagLink1 = !this.tagLink1; break;
        case 2: this.tagLink2 = !this.tagLink2; break;
        case 3: this.tagLink3 = !this.tagLink3; break;
        case 4: this.tagLink4 = !this.tagLink4; break;
      }
    }
  }
}
</script>