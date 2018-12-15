<template>
  <router-link
      class="card-wrap"
      :to="{name: 'detail', params: {key: article.key}}">
    <a-card
      class="article-card"
      hoverable
      :title="article.title">
      <div class="cover-wrap">
        <img class="cover-img" :src="imgUrl" alt="封面图" @error="onImgLoad">
      </div>
      <div class="article-desc"
        v-html="article.desc"
      ></div>
      <a-divider />
      <div class="tag-wrap">
        <a-tag
          v-for="tag in article.tags"
          :key="tag.name"
          :color="tag.color"
          @click="onTagClick($event, tag)"
        >{{tag.name}}</a-tag>
      </div>
      <ArticlesInfo :date="article.date.substr(0, 10)" :categories="article.categories" />
    </a-card>
  </router-link>
</template>

<script>
import ArticlesInfo from './ArticlesInfo.vue'
import $ from 'jquery'

export default {
  name: 'ArticlesItem',
  components: { ArticlesInfo },
  computed: {
    imgUrl () {
      var $content = $(this.article.body)

      if ($content.find('img').length > 0) {
        return $content.find('img').eq(0).attr('src')
      } else {
        return ''
      }

      console.log($content.find('img').length)
    }
  },
  props: {
    article: {
      type: Object
    }
  },
  methods: {
    onTagClick (e, tag) {
      e.stopPropagation()
      e.preventDefault()
      this.$store.commit('setFilterTag', tag)
      this.$router.replace({
        name: 'articles',
        params: {
          page: 1
        }
      })
    },
    onImgLoad (e) {
      console.log(e)
      e.target.src = require('../img/articles/img-error.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../css/_mixin.less";

.card-wrap {
  display: block;
  width: 1100px;
  margin: 20px auto;
  &:hover {
    .article-card {
      .cover-wrap {
        .cover-img {
          .transform(translateX(-50%) scale(1.05));
        }
      }
    }
  }
  &.odd {
    .article-card {
      padding-left: 0;
      padding-right: 300px;
      .cover-wrap {
        left: auto;
        right: 0;
      }
    }
  }
  .article-card {
    padding-left: 300px;
    .cover-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 100%;
      overflow: hidden;
      .cover-img {
        position: absolute;
        top: 0;
        left: 50%;
        .transform(translateX(-50%));
        display: block;
        height: 100%;
        .transition(transform .15s);
      }
    }
    .article-desc {
      height: 170px;
      .maxLine(8);
      overflow: hidden;
    }
    .tag-wrap {
      text-align: center;
    }
  }
}
</style>
