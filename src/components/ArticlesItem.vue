<template>
  <router-link
      class="card-wrap"
      :to="{name: 'detail', params: {key: article.key}}">
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
          @click="onTagClick($event, tag)"
        >{{tag.name}}</a-tag>
      </div>
      <ArticlesInfo :date="article.date.substr(0, 10)" :categories="article.categories" />
    </a-card>
  </router-link>
</template>

<script>
import ArticlesInfo from './ArticlesInfo.vue'

export default {
  name: 'ArticlesItem',
  components: { ArticlesInfo },
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
    }
  }
}
</script>

<style lang="less" scoped>
.card-wrap {
  display: block;
  width: 1100px;
  margin: 20px auto;
  .article-card {
    .tag-wrap {
      text-align: center;
    }
  }
}
</style>
