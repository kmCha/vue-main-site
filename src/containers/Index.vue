<template>
  <div class="container-index">
    <transition name="switch">
      <div class="blog-title" v-show="activeTab == 'main'"></div>
    </transition>
    <transition name="switch">
      <router-link :to="{ path: '/articles' }" class="title-wrapper articles-wrapper" v-show="activeTab == 'articles'">
        <div class="content"></div>
        <div class="switch-title">>>点击进入</div>
      </router-link>
    </transition>
    <transition name="switch">
      <router-link :to="{ path: '/categories' }" class="title-wrapper categories-wrapper" v-show="activeTab == 'categories'">
        <div class="content"></div>
        <div class="switch-title">>点击进入</div>
      </router-link>
    </transition>
    <transition name="switch">
      <router-link :to="{ path: '/achieves' }" class="title-wrapper achieves-wrapper" v-show="activeTab == 'achieves'">
        <div class="content"></div>
        <div class="switch-title">>>点击进入</div>
      </router-link>
    </transition>
    <transition name="switch">
      <router-link :to="{ path: '/tags' }" class="title-wrapper tags-wrapper" v-show="activeTab == 'tags'">
        <div class="content"></div>
        <div class="switch-title">>>点击进入</div>
      </router-link>
    </transition>
    <div class="tab-wrapper">
      <span :class="[activeTab == 'articles' ? 'active' : '']" @click="transformTo('articles')">文章</span>
      <span :class="[activeTab == 'categories' ? 'active' : '']" @click="transformTo('categories')">分类</span>
      <span :class="[activeTab == 'achieves' ? 'active' : '']" @click="transformTo('achieves')">归档</span>
      <span :class="[activeTab == 'tags' ? 'active' : '']" @click="transformTo('tags')">标签</span>
    </div>
  </div>
</template>

<script>
import particle from '../js/app/three-particle.js'

export default {
  name: 'Index',
  data() {
    return {
      activeTab: ''
    }
  },
  methods: {
    transformTo (type) {
      particle.transformTo(type)
      this.activeTab = type
    }
  },
  mounted () {
    particle.init('.container-index')
    setTimeout(() => {
      if (!this.activeTab) {
        this.activeTab = 'main'
      }
    }, 3500)
  },
  activated () {
    particle.render()
  },
  deactivated () {
    particle.stopRender()
  },
}
</script>

<style scoped lang="less">
.switch-enter-active, .switch-leave-active {
  transition: opacity 1.5s, filter 2s .5s;
  transition: opacity 1.5s, -webkit-filter 2s .5s;
  filter: blur(0);
  -webkit-filter: blur(0);
}
.switch-enter, .switch-leave-active {
  opacity: 0;
  filter: blur(100px);
  -webkit-filter: blur(100px);
}
.container-index {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow: hidden;

  .tab-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 5;
    text-align: right;
    box-sizing: border-box;
    padding-right: 50px;
    span {
      display: inline-block;
      padding: 10px 20px;
      border: 1px #fff solid;
      border-radius: 0.5rem;
      margin: 20px 10px;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      &.active, &:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
  .blog-title {
    position: absolute;
    left: 5%;
    top: 10%;
    width: 25%;
    max-width: 503px;
    height: 40%;
    background-image: url('../img/index/blog.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .title-wrapper {
    position: absolute;
    &:hover {
      .switch-title {
        color: #0dc7e3;
      }
    }
    .content {
      background-size: 100% 100%;
    }
    .switch-title {
      display: block;
      color: #fff;
      text-decoration: none;
      text-align: right;
    }
  }
  .articles-wrapper {
    top: 50%;
    left: 30%;
    .content {
      width: 318px;
      height: 75px;
      background-image: url('../img/index/articles.png');
    }
  }
  .categories-wrapper {
    top: 50%;
    right: 15%;
    .content {
      width: 456.3px;
      height: 96px;
      background-image: url('../img/index/categories.png');
    }
  }
  .achieves-wrapper {
    top: 5%;
    left: 50%;
    margin-left: -185px;
    .content {
      width: 370px;
      height: 75px;
      background-image: url('../img/index/achieves.png');
    }
  }
  .tags-wrapper {
    top: 50%;
    right: 35%;
    .content {
      width: 193.6px;
      height: 92px;
      background-image: url('../img/index/tags.png');
    }
  }
}
</style>