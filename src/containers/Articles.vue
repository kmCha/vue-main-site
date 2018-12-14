<template>
  <app-layout>
    <div class="container-inner articles">
      <ArticlesItem
        v-for="article in ($store.state.articlesList && $store.state.articlesList.slice((currPage-1)*pageSize, currPage*pageSize))"
        :key="article.key"
        :article="article" />
      <a-pagination :page-size="pageSize" v-model="currPage" :total="totalCount" @change="onPageChange" />
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../components/Layout.vue'
import ArticlesItem from '../components/ArticlesItem.vue'
import $ from 'jquery'

export default {
  data () {
    return {
      currPage: 1,
      pageSize: 5
    }
  },
  computed: {
    totalCount () {
      return (this.$store.state.articlesList && this.$store.state.articlesList.length) || 0
    }
  },
  components: { AppLayout, ArticlesItem },
  methods: {
    onPageChange (page) {
      $('html').animate({
        scrollTop: 0
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-inner {
  position: relative;
  .ant-pagination {
    text-align: center;
  }
}
</style>
