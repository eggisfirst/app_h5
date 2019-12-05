const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 3,
            viewportUnit: "vw",
            selectorBlackList: [".ignore", ".hairlines"],
            // exclude: ["node_modules"],
            minPixelValue: 1,
            mediaQuery: false,
            landscapeWidth: 1334
          })
        ]
      }
    }
  }
};
