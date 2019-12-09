# derucci-app

## Project setup
```
npm install
```

### 运行项目 Compiles and hot-reloads for development
```
npm run serve
npm run dev
```

### 构建项目 Compiles and minifies for production
```
npm run build
```

### eslint整理代码格式 Lints and fixes files
```
最好git commit前运行一次，这样确保代码格式都是统一的
npm run lint
```


## 目录结构
`
├─dist  
│  ├─css
│  ├─img
│  └─js
├─public                 //静态资源目录
│  └─img
└─src
    ├─api               //api请求目录
    ├─assets            //资源目录
    │  ├─css
    │  ├─font
    │  └─img
    │      └─rep
    ├─components          //组件
    │  ├─report
    │  └─train
    ├─derective           //自定义指令目录
    ├─filters             //公共过滤
    ├─mixins              //公共混入
    ├─router              //路由
    │  └─modules
    ├─store               //vuex
    │  └─modules
    ├─utils               //工具函数
    └─views               //页面
        ├─report
        └─train
`

## 注意
`
设计稿以375*667为基准
`

## 版本说明