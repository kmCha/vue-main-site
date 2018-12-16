<template>
  <a-layout class="app-layout">
    <a-layout-header v-if="$route.name !== 'index'" class="app-header" theme="light">
      <div class="logo">Chamajiuxi's Blog</div>
      <a-menu
        class="app-header-menu"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
      >
        <router-link
          v-for="(item, index) in navInfo"
          class="ant-menu-item"
          active-class="ant-menu-item-selected"
          :key="index"
          :to="{name: item.name}"
          :exact="item.name === 'index'"
        >
          <a-icon :type="item.icon" />
          {{item.title}}
        </router-link>
      </a-menu>
    </a-layout-header>
    <a-layout-content :class="['app-layout-content', {index: $route.name === 'index'}]">
      <slot></slot>
    </a-layout-content>
    <a-layout-footer v-if="$route.name !== 'index'" class="app-footer">
      Majiuxi Cha ©2018 Crafted by 查马纠西 UIed by AntD
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'AppLayout',
  data () {
    return {
      navInfo: [
        {
          name: 'index',
          title: '首页',
          icon: 'home'
        },
        {
          name: 'articlesDefault',
          title: '文章',
          icon: 'profile'
        },
        {
          name: 'categories',
          title: '分类',
          icon: 'bars'
        },
        {
          name: 'achieves',
          title: '归档',
          icon: 'folder-open'
        },
        {
          name: 'tags',
          title: '标签',
          icon: 'tag-o'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.app-layout {
  .app-header {
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    .logo {
      float: left;
      font-family: 'Teko', cursive;
      font-size: 30px;
    }
    .app-header-menu {
      line-height: 64px;
      .ant-menu-item {
        float: right;
      }
    }
  }
  .app-layout-content {
    padding: 0 50px;
    margin-top: 64px;
    &.index {
      padding: 0;
      margin-top: 0;
    }
  }
  .app-footer {
    text-align: center;
  }
}
</style>
