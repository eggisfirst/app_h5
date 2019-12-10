<!--  -->
<template>
  <div class="result">
    <msgCard :imgUrl="''" :code="666666" :title="'2020年慕思经销商年会报名'" :pay="'38.00'" />
    <personCard class="person" :name="'黄青松'" :phone="15012323232" :remark="'单人间'" />
    <thingCard />
    <div class="btn" @click="comfirm">确认无误，提交信息</div>
    <modal v-show="showTips">
      <div class="tips">提交成功</div>
    </modal>
  </div>
</template>

<script>
import msgCard from "@/components/train/msgCard";
import personCard from "@/components/train/personCard";
import thingCard from "@/components/train/thingCard";
import modal from "@/components/train/modal";
export default {
  components: { msgCard, personCard, thingCard, modal },
  data() {
    return {
      showTips: false
    };
  },
  methods: {
    comfirm() {
      console.log("comfirm");
    }
  }
};
</script>
<style lang='scss' scoped>
.result {
  background: #f8f8f8;
  padding-top: 5px;
  box-sizing: border-box;
  .person {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .btn {
    width: 375px;
    height: 49px;
    background: rgba(0, 122, 255, 1);
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 17px;
    color: #fff;
    line-height: 49px;
    text-align: center;
  }
  .tips {
    width: 100px;
    height: 30px;
    background: rgba(204, 230, 255, 1);
    border-radius: 6px;
    font-size:12px;
    color: #007aff;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 311px;
  }
}
</style>