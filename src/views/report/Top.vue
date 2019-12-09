<template>
  <div class="top">
    <!-- <v-touch v-on:swiperight="swiperright"> -->
    <div class="topSale">
      <mybanner :title="title" :style="{ top: `${top}` }" />
      <div class="myarea" :style="{ top: `${top}` }">
        <topArea class="myArea" @getArea="getArea" />
      </div>
      <img :src="bgUrl" class="bgImage" />
      <div class="topTitle">
        <img class="fly" src="~@/assets/img/report/topleft.png" alt />
        <span style="padding:0 4px">{{ topTitle }}</span>
        <img class="fly" src="~@/assets/img/report/topright.png" alt />
      </div>
      <div class="main">
        <div class="top">
          <div class="time">
            <div @click="changeTime">
              <span>
                时间：
                <span class="timeName">{{ dateContent[dateLine] }}</span>
              </span>
              <img
                class="downicon"
                src="~@/assets/img/report/clickdown.png"
                alt
              />
            </div>
            <div class="date" v-show="showTime" ref="myDate">
              <ul v-show="isKey">
                <li
                  :class="['dateList', { active: index == dateLine }]"
                  v-for="(date, index) in dateContent"
                  :key="index"
                  @click="getDate(index)"
                >
                  <span>{{ date }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="unit">
            <span class="unitCon">单位：万元</span>
          </div>
        </div>
        <topList :list="list" />
        <div class="space" v-show="list.length == 0">
          <span class="spaceCon">暂无排名</span>
          <img src="~@/assets/img/report/topSpace.png" alt />
        </div>
      </div>
    </div>
    <!-- </v-touch> -->
  </div>
</template>

<script>
import moment from "moment";
import mybanner from "@/components/report/banner";
import topList from "@/components/report/topList";
import topArea from "@/components/report/topArea";
import { mapState, mapMutations } from "vuex";
// const { mapState, mapMutations }= createNamespacedHelpers('')
import { employeeSales } from "@/api/report";

export default {
  components: {
    mybanner,
    topList,
    topArea
  },
  data() {
    return {
      title: "人物Top榜",
      bgUrl: "./img/topbg.png",
      topTitle: "员工销售Top10",
      // timeContent: "今日",
      showTime: false,
      dateContent: ["今日", "本周", "本月", "近三月", "今年"],
      // dateIndex: 0,
      startDate: moment(new Date()).format("YYYY-MM-DD"),
      endDate: moment(new Date()).format("YYYY-MM-DD"),
      ajaxData: {},
      cityMsg: {},
      list: [],
      url: "/v1/app/top/employee/sales",
      area: this.areaMsg,
      isKey: false,
      top: "",
      typename: "" //登录身份
    };
  },
  created() {
    console.log(this.$store);
    // 获取本地存储信息
    let ajaxData = localStorage.getItem("ajaxData");
    this.ajaxData = JSON.parse(ajaxData);
    let typeNameStore = localStorage.getItem("typeNameStore");
    if (typeNameStore == "store") {
      this.typename = "Store Manager";
    } else {
      this.typename = "Dealer Boss";
    }
    // let shops = localStorage.getItem('shops')
    // console.log('本地存储的shops:', JSON.parse(shops))
  },
  computed: {
    ...mapState({
      dateLine: state => state.report.dateLine,
      areaMsg: state => state.report.areaMsg
    })
  },
  methods: {
    ...mapMutations("report", ["setdateLine"]),

    // 获取top榜数据
    async getTopList(areaMsg, startDate, endDate) {
      if (!areaMsg) return;
      var parmas = {};
      if (this.typename == "Store Manager") {
        parmas = {
          shopId: areaMsg,
          startDate,
          endDate
        };
      } else {
        parmas = {
          city: areaMsg,
          startDate,
          endDate
        };
      }

      console.log(areaMsg);
      let res = await employeeSales(this.url, parmas);
      let { status, data } = res;
      if (status == 1) {
        this.list = data;
      }
    },
    // 获取区域内容
    getArea(val) {
      // console.log(val);
      this.area = val;
    },
    // 右侧滑动
    // swiperright() {
    //   this.$router.push({ path: "/ReportForms" });
    // },
    // 打开时间选择面板
    changeTime() {
      this.showTime = !this.showTime;
      // console.log(this.$refs.myDate);
      if (this.showTime) {
        setTimeout(() => {
          this.isKey = true;
        }, 300);
      } else {
        this.isKey = false;
      }
    },
    // 选择时间
    getDate(index) {
      // console.log(index);
      index = +index;
      // this.dateIndex = index;
      this.setdateLine(index);
      this.showTime = false;
      this.timeContent = this.dateContent[index];
      // 记录时间选择到本地
      // localStorage.setItem("dateLine", index);
      this.set;
      var date = new Date();
      var week = date.getDay(); //当前周的天数
      var month = date.getDate(); //当前月的天数
      var curmon = date.getMonth() + 1; //当前月
      var year = date.getFullYear(); //当前年
      var last = moment().endOf("month");
      // 选取的时间间隔
      switch (index) {
        case 0: //今日
          this.startDate = new Date();
          this.endDate = new Date();
          break;
        case 1: //本周
          if (week && week == 0) {
            week = 7;
            this.startDate = +new Date().getTime() - (week - 1) * 86400 * 1000;
            this.endDate = new Date();
          }
          this.startDate = +new Date().getTime() - (week - 1) * 86400 * 1000;
          var lasts = new Date();
          this.endDate = lasts.setDate(lasts.getDate() + (7 - week));
          break;
        case 2: //本月
          this.startDate = +new Date().getTime() - (month - 1) * 86400 * 1000;

          this.endDate = last._d;
          break;
        case 3: //近三月
          if (curmon >= 3) {
            this.startDate = `${year}-0${curmon - 2}-01`;

            this.endDate = last._d;
          } else if (curmon == 2) {
            this.startDate = `${year - 1}-12-01`;

            this.endDate = last._d;
          } else {
            this.startDate = `${year - 1}-11-01`;

            this.endDate = last._d;
          }
          break;
        case 4: //本年
          this.startDate = `${year}-01-01`;
          this.endDate = `${year}-12-31`;
          break;
      }
      this.startDate = moment(this.startDate).format("YYYY-MM-DD");
      this.endDate = moment(this.endDate).format("YYYY-MM-DD");
      // this.setStartTimeSelect(this.startDate);
      // this.setEndTimeSelect(this.endDate);
      this.getTopList(this.areaMsg, this.startDate, this.endDate);
      this.isKey = false;
    }
  },
  mounted() {
    // 判断是在哪个模块
    var type = this.$route.query.type;
    if (type == "product") {
      this.title = "产品Top榜";
      this.bgUrl = "./img/productbg.png";
      this.topTitle = "产品销售Top10";
      this.url = "/v1/app/top/product/sales";
    }
    // var dateLine = localStorage.getItem("dateLine");
    // console.log(this.areaMsg);
  },
  watch: {
    // 处理首加载
    area() {
      if (this.areaMsg) {
        if (this.dateLine) {
          this.getDate(this.dateLine);
        } else {
          this.getTopList(this.areaMsg, this.startDate, this.endDate);
        }
      } else {
        this.getTopList(this.area, this.startDate, this.endDate);
      }
      // console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 100vh;
  background-color: #007aff;
  .myarea {
    position: absolute;
    right: 33px;
    top: 0;
    padding-top: 4vw;
    z-index: 333;
  }
  .topSale {
    width: 375px;
    height: 300px;
    position: relative;
    .bgImage {
      width: 100vw;
      height: 100%;
    }
    .topTitle {
      position: absolute;
      width: 100%;
      height: 15px;
      line-height: 15px;
      left: 0;
      bottom: 4px;
      font-size: 14px;
      color: #c1dfff;
      display: flex;
      justify-content: center;
      .fly {
        width: 11px;
        height: 7px;
        padding-top: 3px;
      }
    }
  }
  .main {
    width: 100vw;
    // height: 100%;
    background-color: #007aff;
    padding-bottom: 15px;
    margin-top: -7px;
    .top {
      // width: 100vw;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .time {
        width: 105px;
        height: 22px;
        background-color: #2c91ff;
        color: #c1dfff;
        margin-left: 9px;
        border-radius: 11px;
        font-size: 12px;
        text-align: center;
        position: relative;
        z-index: 33;
        .timeName {
          display: inline-block;
          width: 36px;
          white-space: nowrap;
          text-align: center;
        }
        .date {
          margin-top: 4px;
          width: 216px;
          height: 87px;
          background-color: rgba(44, 145, 255, 0.9);
          border-radius: 8px;
          position: absolute;
          animation: box 0.2s linear 1;
          -webkit-animation: box 0.2s linear 1;
          // animation-iteration-count: 1;
          // -webkit-animation-iteration-count: 1;
          /* Safari 和 Chrome */
          ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            padding: 9px;
            box-sizing: border-box;
            .dateList {
              width: 60px;
              height: 30px;
              line-height: 30px;
              background: #a0ceff;
              border-radius: 8px;
              color: #2c91ff;
              margin-bottom: 9px;
              margin-right: 9px;
              &:nth-child(3n) {
                margin-right: 0;
              }
            }
            .active {
              background: #007aff;
              color: #fff;
            }
          }
        }
        .downicon {
          width: 8px;
          height: 5px;
          vertical-align: middle;
          margin-top: -1vw;
          margin-left: 2px;
        }
      }
      .unit {
        // width: 255px;
        height: 12px;
        font-size: 12px;
        line-height: 12px;
        text-align: right;
        color: #c1dfff;
        margin-right: 17px;
      }
    }
    .space {
      height: 100%;
      // color: #fff;
      font-weight: 800;
      // font-size: 30px;
      text-align: center;
      padding-top: 60px;
      position: relative;
      z-index: 1;
      img {
        width: 155px;
        height: 155px;
      }
      .spaceCon {
        position: absolute;
        color: #6fb4ff;
        font-size: 12px;
        padding-top: 4px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }
  }
}
@keyframes box {
  0% {
    width: 0;
    height: 0;
  }

  100% {
    width: 216px;
    height: 87px;
  }
}
</style>
