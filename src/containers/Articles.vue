<template>
  <app-layout>
    <div class="container-inner articles">
      <ArticlesItem
        v-for="article in ($store.state.articlesList && $store.state.articlesList.slice(($route.params.page-1)*pageSize, $route.params.page*pageSize))"
        :key="article.key"
        :article="article" />
      <a-pagination :page-size="pageSize" :current="currPage" :total="totalCount" @change="onPageChange" />
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
      pageSize: 5
    }
  },
  computed: {
    currPage () {
      return window.parseInt(this.$route.params.page)
    },
    totalCount () {
      return (this.$store.state.articlesList && this.$store.state.articlesList.length) || 0
    }
  },
  components: { AppLayout, ArticlesItem },
  methods: {
    onPageChange (page) {
      this.$router.push({
        name: 'articles',
        params: {
          page
        }
      })
      $('html').animate({
        scrollTop: 0
      })
    }
  }
}
</script>

<style lang="less" scoped>
.articles {
  position: relative;
  .ant-pagination {
    text-align: center;
  }
}
</style>
