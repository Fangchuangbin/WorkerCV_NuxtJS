<template>
  <div id="__template">
    <Header />
    <section class="template-section-3 bg-white shadow-sm py-4 overflow-hidden">
      <div class="container">
        <h3 class="text-dark">Java程序员简历模板</h3>
        <p class="text-muted mt-2 font-size-14">发布于2020-12-19 / 已有12321人使用</p>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramsId: this.$route.params.id.split('.html')[0]
    }
  },
  head() {
    return {
      title: '内容页 - 简历模板 - 极速简历 WorkerCV'
    }
  },
  mounted() {
    console.log(this.paramsId)
  }
}
</script>