<!--  -->
<template>
  <div class="msgCard">
    <img class="img" :src="imgUrl" />
    <div class="right_box">
      <div class="title">
        <p>{{ title }}</p>
        <p class="number">报名码：{{ code }}</p>
      </div>
      <p class="cost">报名费用：￥{{ pay }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["code", "title", "pay", "imgUrl"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.msgCard {
  box-sizing: border-box;
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  .img {
    width: 120px;
    height: 90px;
    border: 1px solid #000;
  }
  .right_box {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    min-height: 90px;
    margin-left: 15px;
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #363636;
      line-height: 27px;
      .number {
        word-break: break-all;
      }
    }
    .cost {
      font-size: 12px;
      color: #363636;
    }
  }
}
</style>
