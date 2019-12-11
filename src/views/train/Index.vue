<template>
  <div class="container">
    <loginModel
      class="loginModal"
      :loginStatus="loginStatus"
      :loginText="loginText"
    />
    <loginModel
      class="loginModal"
      :loginStatus="loginStatus"
      :loginText="loginText"
    />
    <loginModel
      class="loginModal"
      :loginStatus="loginStatus"
      :loginText="loginText"
    />
    <loginModel
      class="loginModal"
      :loginStatus="loginStatus"
      :loginText="loginText"
    />
    <div class="toCode" @click="toCode"></div>
  </div>
</template>

<script>
import loginModel from "@/components/train/loginModel";
export default {
  components: { loginModel },
  data() {
    return {
      loginStatus: "login",
      loginText: "报名中"
    };
  },
  methods: {
    toCode() {
      console.log("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  overflow: scroll;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-top: 10px;
  .loginModal {
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .toCode {
    background: url(../../assets/img/train/scan_btn.png) no-repeat center;
    background-size: contain;
    width: 103px;
    height: 99px;
    position: fixed;
    bottom: 5px;
    left: 136px;
  }
}
</style>
