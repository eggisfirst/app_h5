<!--  -->
<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.modal {
  width: 375px;
  height: 667px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
}
</style>