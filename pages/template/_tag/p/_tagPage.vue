<template>
  <div><h1>{{ paramsId }}</h1>
  <h2>tagPage</h2></div>
</template>
<script>
export default {
  data() {
    return {
      paramsId: this.$route.params.tagPage
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