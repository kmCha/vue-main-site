<template>
  <div id="app">
    <transition name="fade">
      <keep-alive include="Index">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less">
@import "../css/_mixin.less";

.fade-enter-active, .fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .transition(all .3s);
}
.fade-enter-active {
  z-index: 5;
}
.fade-leave-active {
  z-index: 4;
}
.fade-enter, .fade-leave-to {
  .opacity(0);
}
.fade-enter-to, .fade-leave {
  .opacity(1);
}
</style>
