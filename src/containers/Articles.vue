<template>
  <app-layout>
    <div class="container-inner articles">
      <router-link
          v-for="article in $store.state.articlesList"
          :key="article.key"
          class="card-wrap"
          :to="{name: 'detail', params: {id: article.key}}">
        <a-card
          class="article-card"
          hoverable
          :title="article.title">
          <div class="article-desc"
            v-html="article.desc"
          ></div>
          <a-divider />
          <div class="tag-wrap">
            <a-tag
              v-for="tag in article.tags"
              :key="tag.name"
              :color="tag.color"
            >{{tag.name}}</a-tag>
          </div>
          <div class="info-wrap">
            <span class="info-item"><a-icon type="calendar" />{{article.date.substr(0, 10)}}</span>
            <span class="info-item"><a-icon type="bars" />{{article.categories}}</span>
          </div>
        </a-card>
      </router-link>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../components/Layout.vue'

export default {
  data () {
    return {
    }
  },
  components: { AppLayout },
  created () {
  }
}
</script>

<style lang="less" scoped>
.container-inner {
  position: relative;
  .card-wrap {
    display: block;
    width: 1100px;
    margin: 20px auto;
  }
  .article-card {
    .tag-wrap {
      text-align: center;
    }
    .info-wrap {
      text-align: center;
      .info-item {
        display: inline-block;
        margin: 15px 10px 0;
        i {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
