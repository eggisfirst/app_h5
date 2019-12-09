import CryptoJS from "crypto-js";

//数据加签
export const getSign = (obj, token) => {
  // 对象排序
  function sortObj(obj) {
    let [temp, arr] = [{}, []];
    for (let key in obj) {
      arr.push(key);
    }
    arr = arr.sort();
    for (let i in arr) {
      temp[arr[i]] = obj[arr[i]];
    }
    return temp;
  }
  obj = sortObj(obj);
  let str = "";
  for (let key in obj) {
    if (obj[key] || obj[key] === 0 || obj[key] === "0") {
      str = str === "" ? `${key}=${obj[key]}` : `${str}&${key}=${obj[key]}`;
    }
  }
  return CryptoJS.SHA1(str + token).toString(CryptoJS.enc.Hex);
};

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
