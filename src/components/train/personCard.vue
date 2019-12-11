<!--  -->
<template>
  <div class="personCard">
    <p class="name">{{ name }}</p>
    <p class="text">{{ phone }}</p>
    <p class="text">住宿要求： {{ remark }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "phone", "remark"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.personCard {
  background-color: #fff;
  padding: 15px 17px;
  box-sizing: border-box;
  .name {
    font-size: 16px;
    font-weight: 500;
    color: #363636;
    line-height: 21px;
  }
  .text {
    font-size: 14px;
    color: #666;
    line-height: 21px;
  }
}
</style>
