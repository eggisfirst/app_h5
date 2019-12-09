<template>
  <div id="app">
    <transition name="page-move">
      <router-view class="doui-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
#app {
  height: 100vh;
  overflow-x: hidden;
}
.doui-view {
  // position: absolute;
  // z-index: 10;
  // top: 0;
  // left: 0;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
}
.page-move-enter,
.page-move-leave-active {
  transform: translate(100%, 0);
}
.page-move-enter-active,
.page-move-leave-active {
  transition: transform 0.3s;
}
</style>
