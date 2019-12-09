import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getQueryObject } from "@/utils";
import "@/assets/css/base.scss";
import "./assets/font/iconfont.css";

Vue.config.productionTip = false;
localStorage.token = JSON.stringify(getQueryObject()["token"]);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
