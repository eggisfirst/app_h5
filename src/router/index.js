import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "report",
    component: () => import("@/views/report/Index"),
    meta: {
      title: "报表"
    }
  },
  {
    path: "/train",
    name: "train",
    component: () => import("@/views/train/Index"),
    meta: {
      title: "培训报名首页"
    }
  },
  {
    path: "/printCode",
    name: "printCode",
    component: () => import("@/views/train/printCode"),
    meta: {
      title: "报名码"
    }
  },
  {
    path: "/result",
    name: "result",
    component: () => import("@/views/train/result"),
    meta: {
      title: "发放物资"
    }
  },
  {
    path: "/top",
    name: "top",
    component: () => import("@/views/report/Top"),
    meta: {
      title: "排行榜"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
