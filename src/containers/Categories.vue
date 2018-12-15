<template>
  <app-layout>
    <div class="container-inner categories">
      <div class="categories-wrap">
        <a-collapse>
          <a-collapse-panel
            v-for="category in $store.state.categoryList"
            :key="category.name"
            :header="category.name">
            <router-link
              class="article-item"
              v-for="article in category.articles"
              :key="article.key"
              :to="{name: 'detail', params: {key: article.key}}"
            >{{article.title}}</router-link>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../components/Layout.vue'

export default {
  components: { AppLayout }
}
</script>

<style lang="less" scoped>
.categories {
  position: relative;
  .categories-wrap {
    width: 1100px;
    margin: 20px auto 0;
    .article-item {
      display: block;
    }
  }
}
</style>
