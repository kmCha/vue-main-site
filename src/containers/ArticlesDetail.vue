<template>
  <app-layout>
    <div class="container-inner articles-detail">
      <template v-if="article">
        <a-breadcrumb class="sub-nav">
          <a-breadcrumb-item><a @click="back">返回</a></a-breadcrumb-item>
          <a-breadcrumb-item>文章详情</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="article-title">{{article.title}}</div>
        <ArticlesInfo :date="article.date.substr(0, 10)" :categories="article.categories" />
        <div class="content-wrap" v-html="article.body"></div>
      </template>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../components/Layout.vue'
import ArticlesInfo from '../components/ArticlesInfo.vue'
import $ from 'jquery'
import { waitUntil } from '../js/app/common'

export default {
  components: { AppLayout, ArticlesInfo },
  data () {
    return {

    }
  },
  computed: {
    article () {
      return this.$store.state.articlesList.find(item => item.key === this.$route.params.key)
    }
  },
  updated () {
    this.initHighlight()
  },
  mounted () {
    this.initHighlight()
  },
  methods: {
    back () {
      if (window.history.length <= 1) {
        this.$router.push({name: 'articlesDefault'})
      } else {
        this.$router.back()
      }
    },
    initHighlight () {
      $('.content-wrap pre code').each(function(i, block) {
        hljs.highlightBlock(block)
      })
    }
  }
}
</script>

<style lang="less">
.articles-detail {
  position: relative;
  width: 1100px;
  margin: 0 auto;
  background-color: #fff;
  padding: 0 40px 40px;
  overflow: hidden;
  .sub-nav {
    line-height: 50px;
  }
  .article-title {
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
    margin: 10px auto 30px;
  }
  .articles-info-wrap {
    text-align: center;
    .info-item {
      display: inline-block;
      margin: 0 10px 30px;
      i {
        margin: 0 5px;
      }
    }
  }
  .content-wrap {
    li {
      margin-left: 50px;
    }
    a {
      text-decoration: underline;
    }
    p {
      text-indent: 30px;
      & > code {
        display: inline-block;
        background-color: #f2f2f2;
        border: 1px solid #dedede;
        border-radius: 2px;
        font: .8em Monaco,monospace;
        padding: 1px 4px;
        margin: 0 2px;
        text-indent: 0;
      }
    }
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
