<!--  -->

<template>
  <div class="wt-checkbox">
    <ul>
      <li
        v-for="(item, index) in dataSource"
        :key="index"
        @click="handle(item, index)"
      >
        <p
          :class="{ 'icon-check acitive': find(item), disable: item.disable }"
        ></p>
        <div class="text">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      selected: [] // 选中选项
    };
  },
  methods: {
    // 点击选项触发的函数
    handle(item, index) {
      console.log(item, index);
      // 如果disable为真则不能被选中，直接return
      if (item.disable) {
        return;
      }
      // 如果当前点击选项不在已选中数组内，则添加进去，否则就清除出去
      if (!this.find(item)) {
        this.selected.push(item);
      } else {
        var i = this.find(item, true).index;
        this.selected.splice(i, 1);
      }
      this.$emit("handle", this.selected); // 传值父组件
    },
    // 去重操作
    /*
      参数说明：
        item 当前选项 (必须)
        remove 是否删除 (选传)
     */
    find(item, remove) {
      var flag = false;
      var index;
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === item) {
          flag = true;
          index = i;
        }
      }
      if (remove) {
        return {
          flag: flag,
          index: index
        };
      } else {
        return flag;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.text {
  color: #363636;
  font-size: 14px;
  font-weight: 500;
  margin-right: 24px;
  margin-left: 6px;
}
.wt-checkbox {
  ul {
    background: #ffffff;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      box-sizing: border-box;
      position: relative;
      text-align: left;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      p {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgba(238, 238, 238, 1);
        border: 1px solid rgba(210, 210, 210, 1);
        box-sizing: border-box;
        overflow: hidden;
        &.acitive {
          color: #ffffff;
          background: url(../../assets/img/train/clicked.png) no-repeat center;
          background-size: contain;
          width: 16px;
          height: 16px;
          border: none;
        }
        &.disable {
          background: #eee;
        }
      }
    }
  }
}
</style>
