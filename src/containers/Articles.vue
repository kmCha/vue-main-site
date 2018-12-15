<template>
  <app-layout>
    <div class="container-inner articles">
      <div class="filter-list-wrap">
        <a-tag
          v-for="tag in $store.state.filterTagList"
          :key="tag.name"
          :color="tag.color"
          closable
          @close="onFilterTagClose(tag)"
        >{{tag.name}}</a-tag>
      </div>
      <ArticlesItem
        v-for="(article, index) in articlesList"
        :key="article.key"
        :class="[{odd: index % 2 === 1}]"
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
    articlesList () {
      var { articlesList } = this.$store.state
      var page = this.$route.params.page

      return articlesList.filter(this.filterArticlesByTags).slice((page-1) * this.pageSize, page * this.pageSize)
    },
    currPage () {
      return window.parseInt(this.$route.params.page)
    },
    totalCount () {
      return this.$store.state.articlesList.filter(this.filterArticlesByTags).length
    },
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
    },
    onFilterTagClose (tag) {
      this.$store.commit('removeFilterTag', tag)
      this.$router.replace({
        name: 'articles',
        params: {
          page: 1
        }
      })
    },
    filterArticlesByTags (article) {
      var { filterTagList } = this.$store.state
      var contain = true
      var tags = article.tags
      if (tags.length < filterTagList.length) {
        contain = false
      } else {
        for (let i = 0; i < filterTagList.length; i++) {
          if (!tags.some(tag => tag.name === filterTagList[i].name)) {
            contain = false
            break
          }
        }
      }
      return contain
    }
  }
}
</script>

<style lang="less" scoped>
.articles {
  position: relative;
  .filter-list-wrap {
    width: 1100px;
    margin: 20px auto 0;
  }
  .ant-pagination {
    text-align: center;
  }
}
</style>
