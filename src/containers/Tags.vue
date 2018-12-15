<template>
  <app-layout>
    <div class="container-inner tags">
      <div class="tags-wrap">
        <a-tag
          v-for="tag in $store.state.tagList"
          :key="tag.name"
          :color="tag.color"
          @click="onTagClick(tag)"
        >{{tag.name}}</a-tag>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../components/Layout.vue'

export default {
  components: { AppLayout },
  methods: {
    onTagClick (tag) {
      this.$router.push({
        name: 'articles',
        params: {
          page: 1
        }
      })
      this.$store.commit('removeFilterTag')
      this.$store.commit('setFilterTag', tag)
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  position: relative;
  .tags-wrap {
    position: relative;
    width: 1100px;
    margin: 20px auto 0;
    .ant-tag {
      margin-bottom: 10px;
    }
  }
}
</style>
