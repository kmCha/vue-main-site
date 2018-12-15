<template>
  <app-layout>
    <div class="container-inner achieves">
      <div class="timeline-wrap"></div>
        <a-timeline mode="alternate">
          <a-timeline-item
            v-for="(article, index) in $store.state.articlesList"
            :key="article.key">
            <span v-if="index % 2 === 0">[{{article.date.slice(0, 10)}}]</span>
            <router-link :to="{name: 'detail', params: {key: article.key}}">{{article.title}}</router-link>
            <span v-if="index % 2 === 1">[{{article.date.slice(0, 10)}}]</span>
          </a-timeline-item>
        </a-timeline>
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
.achieves {
  position: relative;
  .timeline-wrap {
    position: relative;
    width: 1100px;
    margin: 20px auto 0;
  }
}
</style>
