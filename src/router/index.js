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
