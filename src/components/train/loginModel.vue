<!--  -->
<template>
  <div class="login_container">
    <div class="header">
      <div :class="loginStatus">{{loginText}}</div>
      <div class="logo">derucci慕思</div>
    </div>
    <div class="content">
      <img class="content_img" />
      <p class="title">2020年慕思经销商年会报名</p>
    </div>
    <div class="remark">
      <div class="time">
        <img src="../../assets/img/train/time.png" alt class="time_icon" />
        <p>报名时间:2020年01月20日 09:00至2020年02月20日 09:00</p>
      </div>
      <div class="time">
        <img src="../../assets/img/train/location.png" alt class="time_icon" />
        <p>活动地点：东莞市家具大道1号嘉华酒店会议厅</p>
      </div>
    </div>
    <div class="footer">
      <span class="num">已报名 1133</span>
      <div class="btn">
        <div class="login">登记报名</div>
        <div class="list">报名名单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loginStatus", "loginText"],
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.login_container {
  width: 343px;
  // height: 260px;
  box-shadow: 0px 5px 5px 0px rgba(220, 226, 233, 0.2);
  border-radius: 8px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .login {
      width: 78px;
      height: 25px;
      background: url(../../assets/img/train/red.png) no-repeat center;
      background-size: contain;
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
    }
    .begin {
      width: 78px;
      height: 25px;
      background: url(../../assets/img/train/blue.png) no-repeat center;
      background-size: contain;
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
    }
    .end {
      width: 78px;
      height: 25px;
      background: url(../../assets/img/train/grey.png) no-repeat center;
      background-size: contain;
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
    }
    .logo {
      margin-right: 15px;
    }
  }
  .content {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    .content_img {
      width: 120px;
      height: 90px;
      border: 1px solid #000;
    }
    .title {
      color: #363636;
      font-size: 18px;
      line-height: 27px;
      font-weight: 500;
      margin-left: 16px;
    }
  }
  .remark {
    position: relative;
    margin-top: 15px;
    padding-left: 15px;
    // border-bottom: 1px solid #e1e1e1;
    .time {
      display: flex;
      align-items: flex-start;
      font-size: 12px;
      color: #666;
      line-height: 17px;
      margin-bottom: 11px;
      .time_icon {
        width: 13px;
        height: 13px;
        margin-right: 8px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 1px;
      background: #e1e1e1;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
  }
  .footer {
    height: 51px;
    padding-left: 17px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .num {
      font-size: 14px;
      color: #363636;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .login {
        width: 84px;
        height: 30px;
        border: 1px solid rgba(0, 122, 255, 1);
        border-radius: 4px;
        font-size: 14px;
        color: #007aff;
        text-align: center;
        line-height: 30px;
        margin-right: 5px;
      }
      .list {
        width: 84px;
        height: 30px;
        border: 1px solid rgba(144, 144, 144, 1);
        border-radius: 4px;
        font-size: 14px;
        color: #909090;
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>