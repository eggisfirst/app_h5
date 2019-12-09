<!--  -->
<template>
  <div class="printCode">
    <div class="title">输入报名码</div>
    <input type="text" class="input_box" v-model.trim="inpVal" />
    <button class="comfirm" @click="comfirm">确认</button>
    <div class="tips" v-show="hasData">未查询到信息</div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasData: false,
      inpVal: ""
    };
  },
  methods: {
    comfirm() {
      console.log(this.inpVal);
    }
  }
};
</script>
<style lang='scss' scoped>
.printCode {
  box-sizing: border-box;
  padding-top: 131px;
  .title {
    font-weight: bold;
    text-align: center;
    font-size: 24px;
  }
  .input_box {
    width: 300px;
    height: 49px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 122, 255, 1);
    border-radius: 24px;
    line-height: 49px;
    font-size: 24px;
    font-weight: 500;
    padding: 0 20px;
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    margin-top: 36px;
    margin-bottom: 20px;
  }
  .comfirm {
    width: 300px;
    height: 49px;
    color: #fff;
    font-size: 17px;
    background: rgba(0, 122, 255, 1);
    border: 1px solid rgba(0, 93, 194, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 86, 179, 0.28);
    border-radius: 24px;
    display: block;
    margin: 0 auto;
  }
  .tips {
    width: 100px;
    height: 30px;
    background: rgba(255, 213, 204, 1);
    border-radius: 6px;
    color: #ff6d4c;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
  }
  .footer {
    background: url(../../assets/img/train/foot.png) no-repeat center;
    background-size: contain;
    width: 375px;
    height: 174px;
    position: fixed;
    bottom: 0
  }
}
</style>