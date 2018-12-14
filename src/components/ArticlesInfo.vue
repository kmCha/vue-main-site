<template>
  <div class="articles-info-wrap">
    <span class="info-item"><a-icon type="calendar" />{{date}}</span>
    <span class="info-item"><a-icon type="bars" />{{categories}}</span>
  </div>
</template>

<script>
export default {
  name: 'ArticlesInfo',
  props: {
    date: {
      type: String,
      required: true
    },
    categories: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.articles-info-wrap {
  text-align: center;
  .info-item {
    display: inline-block;
    margin: 15px 10px 0;
    i {
      margin: 0 5px;
    }
  }
}
</style>
