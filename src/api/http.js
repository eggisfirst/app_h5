import { getSign } from "@/utils";
import axios from "axios";
import qs from "qs";
// import { Indicator, Toast } from "mint-ui";
import router from "@/router";

let baseURL = "https://mobiletest.derucci.net/cd-sys-web/";
// let baseURL = "https://agency.derucci.com/"; //

let instance = axios.create({
  baseURL: baseURL,
  showLoading: true,
  timeout: 5000
});

// http request 拦截器
instance.interceptors.request.use(
  config => {
    if (config.headers["Content-Type"] == "application/x-www-form-urlencoded") {
      config.data = qs.stringify(config.data);
    }
    if (config.headers["Content-Type"] == "application/json") {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.resolve(error);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error && error.response && error.response.status == 510) {
      router.push({
        path: "/Login"
      });
    } else {
      // Toast("请求失败，请检查网络");
    }
    console.log(JSON.stringify(error));
    return Promise.reject(error);
  }
);

//默认的
export const http = options => {
  let token = JSON.parse(localStorage.getItem("token") || "{}");
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.access_token}`,
    sign: getSign(options.params, token.access_token)
  };
  header = Object.assign(header, options.headers);
  options.headers = header;
  return instance(options);
};

export const agHttp = options => {
  let token = JSON.parse(localStorage.getItem("agToken") || "{}");
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.access_token}`,
    sign: getSign(options.params, token.access_token)
  };
  header = Object.assign(header, options.headers);
  options.headers = header;
  return instance(options);
};

export const postJson = (url, params, mheader = {}) => {
  let token = JSON.parse(localStorage.getItem("token") || "{}");
  let dheader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.access_token}`,
    sign: getSign(params, token.access_token)
  };
  let headers = Object.assign(dheader, mheader);
  return instance.post(url, params, {
    headers
  });
};

export const req = instance;

export const upload = (url, params, signData, auth) => {
  let token = JSON.parse(localStorage.getItem("token") || "{}");
  if (auth) {
    token = JSON.parse(localStorage.getItem("agToken") || "{}");
  }
  let options = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access_token}`,
      sign: getSign(signData, token.access_token)
    },
    timeout: 120000
  };
  return instance.post(url, params, options);
};
