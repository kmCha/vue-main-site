<template>
  <a-layout class="app-layout">
    <a-layout-header v-if="$route.name !== 'index'" class="app-header" theme="light">
      <div class="logo" />
      <a-menu
        class="app-header-menu"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
      >
        <router-link
          v-for="(item, index) in routeTabs"
          class="ant-menu-item"
          active-class="ant-menu-item-selected"
          :key="index"
          :to="{name: item.name}"
          exact
        >
          {{item.meta.title}}
        </router-link>
      </a-menu>
    </a-layout-header>
    <a-layout-content :class="['app-layout-content', {index: $route.name === 'index'}]">
      <slot></slot>
    </a-layout-content>
    <a-layout-footer v-if="$route.name !== 'index'" class="app-footer">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { routes } from '../js/router'
export default {
  name: 'AppLayout',
  data () {
    return {
      routeTabs: routes.filter(item => item.meta && item.meta.title)
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
    .app-header-menu {
      line-height: 64px;
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
