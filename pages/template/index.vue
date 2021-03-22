<template>
  <div id="__template">
    <Header />
    <section class="bg-white shadow-sm pt-4 overflow-hidden template-section-1">
      <div class="container-sm px-3 px-md-5">
        <h3 class="text-dark text-center mb-3">模板搜索</h3>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入关键字..." aria-label="请输入关键字..." aria-describedby="templateSearch">
          <div class="input-group-append">
            <button class="btn btn-dark px-4 px-md-5" type="button" id="templateSearch">搜索</button>
          </div>
        </div>
        <div class="my-3 overflow-hidden">
          <a class="badge badge-success" href="">应届生</a>
          <a class="badge badge-secondary" href="">金融工程</a>
          <a class="badge badge-primary" href="">Java</a>
          <a class="badge badge-danger" href="">Web前端</a>
          <a class="badge badge-dark" href="">平面设计</a>
          <a class="badge badge-info" href="">应届生</a>
          <a class="badge badge-danger" href="">金融工程</a>
          <a class="badge badge-success" href="">应届生</a>
          <a class="badge badge-secondary" href="">金融工程</a>
          <a class="badge badge-primary" href="">Java</a>
          <a class="badge badge-danger" href="">Web前端</a>
          <a class="badge badge-dark" href="">平面设计</a>
          <a class="badge badge-info" href="">应届生</a>
          <a class="badge badge-danger" href="">金融工程</a>
          <a class="badge badge-success" href="">应届生</a>
          <a class="badge badge-secondary" href="">金融工程</a>
          <a class="badge badge-primary" href="">Java</a>
          <a class="badge badge-danger" href="">Web前端</a>
          <a class="badge badge-dark" href="">平面设计</a>
          <a class="badge badge-info" href="">应届生</a>
          <a class="badge badge-danger" href="">金融工程</a>
        </div>
      </div>
      <div class="container">
        <nav>
          <div class="nav template-nav nav-tabs border-0" id="nav-tab" role="tablist">
            <a class="nav-link text-muted px-0 mr-4 active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-hot" aria-selected="true">热门</a>
            <a class="nav-link text-muted px-0 mr-4 ml-2" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">行业</a>
            <a class="nav-link text-muted px-0 mr-4 ml-2" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">职位</a>
            <a class="nav-link text-muted px-0 mr-4 ml-2" id="nav-school-tab" data-toggle="tab" href="#nav-school" role="tab" aria-controls="nav-school" aria-selected="false">高校</a>
          </div>
        </nav>
      </div>
    </section>
    <section class="py-3 overflow-hidden template-section-2">
      <div class="container tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="row">
            <div class="col-12 mt-1 template-tag">
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="/template/pmsj">平面设计</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="/template/java">Java</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">Web前端</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div class="row">
            <div class="col-12 mt-1 template-tag">
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <div class="row">
            <div class="col-12 mt-1 template-tag">
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">Java</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">Web前端</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">Java</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">Web前端</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-school" role="tabpanel" aria-labelledby="nav-school-tab">
          <div class="row">
            <div class="col-12 mt-1 template-tag">
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">程序员</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">PHP</a>
              <a class="badge badge-white p-2 px-3 mr-1 rounded-pill shadow-sm" href="">金融工程</a>
            </div>
          </div>
        </div>
        <ul class="row mt-2">
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="/template/20210122">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-light border-top">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
          <li class="col-12 col-md-2 py-1 mb-3 overflow-hidden">
            <div class="card border-0 shadow-sm bg-white rounded-lg"><a href="">
              <img src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100" class="card-img-top" alt="...">
              <div class="card-body px-3 py-2 border-top border-light">
                <p class="card-text text-dark title font-size-14">程序员简历模板</p>
                <p class="card-text text-dark"><span class="badge badge-success mr-2">免费</span><span class="badge badge-dark">程序员</span></p>
              </div>
            </a></div>
          </li>
        </ul>
        <nav class="template-pagination mt-1" aria-label="Page navigation example">
          <ul class="pagination font-size-14">
            <li class="page-item"><a class="page-link text-dark" href="#">上一页</a></li>
            <li class="page-item active" aria-current="page"><a class="page-link text-dark" href="#">1</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">下一页</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  head() {
    return {
      title: '简历模板 - 极速简历 WorkerCV'
    }
  }
}
</script>