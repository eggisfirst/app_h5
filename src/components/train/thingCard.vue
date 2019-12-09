<!--  -->
<template>
  <div class="thingCard">
    <div class="head">
      <img src="../../assets/img/train/thing.png" alt class="img" />
      <span class="text">物资发放</span>
    </div>
    <div class="live_box">
      <span class="text">住宿</span>
      <input type="text" placeholder="请输入酒店和房间号信息" class="inpBox" />
    </div>
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
.thingCard {
  background: #fff;
  box-sizing: border-box;
  padding: 16px;
  .head {
    display: flex;
    align-items: center;
    .img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
  .live_box {
    margin-top: 20px;
    .inpBox {
      width: 290px;
      height: 44px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 4px;
      margin-left: 20px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
    }
  }
  .text {
    color: #363636;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>