<!--  -->
<template>
  <div class="result">
    <msgCard :imgUrl="''" :code="666666" :title="'2020年慕思经销商年会报名'" :pay="'38.00'" />
    <personCard class="person" :name="'黄青松'" :phone="15012323232" :remark="'单人间'"/>
    <thingCard />
  </div>
</template>

<script>
import msgCard from "@/components/train/msgCard";
import personCard from "@/components/train/personCard";
import thingCard from "@/components/train/thingCard";
export default {
  components: { msgCard, personCard, thingCard },
  data() {
    return {};
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
}
</style>