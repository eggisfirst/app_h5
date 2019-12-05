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
#app{
  overflow-x:hidden;
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
