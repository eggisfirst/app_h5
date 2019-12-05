<template>
  <div class="reportForms">
    <!-- <WorkHeader :title="'报表'" v-if="status" /> -->
    <banner :title="'店长报表'" class="header" v-if="!status"></banner>
    <div class="search">
    </div>
    <div class="topList">
      <div class="peopleTop" @click="topSales('person')"></div>
      <div class="shopTop" @click="topSales('product')"></div>
    </div>
    <div class="forms">
      <div class="title">报表模块</div>
      <ul>
        <li v-for="(item,index) in forms" :key="index" @click="linkTo(index)" :class="`${index}`">
          <div class="icon" :style="{background:item.color}">
            <div class="icon-forms" :style="{'background-position':`${item.iconPosition}`}"></div>
          </div>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <Footer v-if="status" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [
        {
          color: "#007aff",
          text: "销售额",
          iconPosition: "-1vw -1.6vw"
        },
        {
          color: "#5856d6",
          text: "铁三角",
          iconPosition: "-19.6vw -1.6vw"
        },
        {
          color: "#5ac8fa",
          text: "品牌",
          iconPosition: "-37.8vw -1.6vw"
        },
        {
          color: "#ff2d55",
          text: "品类",
          iconPosition: "-55.9vw -1.6vw"
        },
        {
          color: "#ff644b",
          text: "品牌品类",
          iconPosition: "-74.1vw -1.6vw"
        },
        {
          color: "#ff644b",
          text: "坪效",
          iconPosition: "-92.5vw -1.6vw"
        },
        {
          color: "#ffcc00",
          text: "人效",
          iconPosition: "-110vw -1.6vw"
        },
        {
          color: "#f93580",
          text: "客户来源",
          iconPosition: "-127.8vw -1.6vw"
        }
      ],
      slots: [
        {
          flex: 1,
          values: [
            "2015年-01月",
            "2015年-02月",
            "2015年-03月",
            "2015年-04月",
            "2015年-05月",
            "2015年-06月"
          ],
          className: "slot1",
          textAlign: "center"
        }
      ],
      status: true,
      paddingTop: 0
    };
  },
  mounted() {
    if (this.$route.query.name == "store") {
      this.status = false;
      this.paddingTop = "16.4vw";
    } else {
      this.paddingTop = "18vw";
    }
    localStorage.setItem("typeNameStore", this.$route.query.name || "");
  },
  methods: {
    linkTo: function(index) {
      if (index == 0) {
        this.$router.push({ path: "/sales" });
      } else if (index == 1) {
        this.$router.push({ path: "/audioTechnica" });
      } else if (index == 2) {
        this.$router.push({ path: "/brand?type=brand" });
      } else if (index == 3) {
        this.$router.push({ path: "/brand?type=category" });
      } else if (index == 4) {
        this.$router.push({ path: "/brandCetagory" });
      } else if (index == 5) {
        this.$router.push({ path: "/areaEffectiveness" });
      } else if (index == 6) {
        this.$router.push({ path: "/peopleWork" });
      } else if (index == 7) {
        this.$router.push({ path: "/customerSource" });
      }
    },
    topSales(to) {
      switch (to) {
        case "person":
          this.$router.push({ path: "/top?type=person" });
          break;
        case "product":
          this.$router.push({ path: "/top?type=product" });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.reportForms {
  min-height: 100vh;
  // font-family: PINGPANG;
  background: #f8f8f8;
  position: relative;
  .fix {
    position: absolute;
    background: #f8f8f8;
    left: 0;
    top: -14vw;
    height: 14.1vw;
    width: 100vw;
    z-index: 99;
  }
  .search {
    .search-icon {
      background: url(~@/assets/img/report/search.png) no-repeat;
      background-size: 100% 100%;
      width: 3.2vw;
      height: 3.2vw;
      position: absolute;
      top: 2.4vw;
      left: 3vw;
    }
    input {
      width: 80vw;
      padding-left: 7vw;
      height: 7.73vw;
      font-size: 3.2vw;
      color: #8e8e93;
    }
  }
  .topList {
    width: 100vw;
    height: 26.66vw;
    // border-top: 1px solid #a6a6a6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shopTop {
      background: url(~@/assets/img/report/productTop.png) no-repeat;
      background-size: 100% 100%;
      width: 44vw;
      height: 21.33vw;
      margin-right: 4.26vw;
    }
    .peopleTop {
      background: url(~@/assets/img/report/peopleTop.png) no-repeat;
      background-size: 100% 100%;
      width: 44vw;
      height: 21.33vw;
      margin-left: 4.26vw;
    }
  }
  .forms {
    width: 100vw;
    background: #fff;
    padding-bottom: 10vw;
    .title {
      font-size: 4.8vw;
      font-weight: bold;
      color: #363636;
      margin: 0 auto;
      text-align: center;
      line-height: 10.66vw;
      border-bottom: 4px solid #363636;
      width: 26.66vw;
    }
    ul {
      width: 87.06vw;
      margin: 0 auto;
      padding-top: 10.8vw;
      border-top: 1px solid #e1e1e1;
      background: #fff;
      height: 100vw;
      li {
        width: 20vw;
        height: 26.66vw;
        float: left;
        margin-right: 13.4vw;
        margin-bottom: 3.1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 15vw;
          height: 15vw;
          border-radius: 2.66vw;
          position: relative;
          .icon-forms {
            background-image: url(~@/assets/img/report/icon2.png);
            background-repeat: no-repeat;
            width: 15vw;
            height: 15vw;
            border-radius: 2.66vw;
            background-size: 977%;
          }
          .iconBrand {
            width: 20vw;
            height: 20vw;
            border-radius: 2.66vw;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          text-align: center;
          color: #666;
          font-size: 4vw;
        }
      }
      li:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>
