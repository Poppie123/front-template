# front-system
```
peiyu created on 2020.09.16
vue cli4 搭建
vue + typescript + element ui

vscode建议按照stylus插件
```

## 安装依赖
```
npm install  //or
yarn install
```

### 开发编译和热重新加载
```
npm run serve  //or
yarn serve
```

### 打包
```
npm run build //or
yarn build
```

## utils
```
utils文件夹 封装常用函数和方法：
如：axios 请求的封装
```

## store ( Vuex )
```
一般大型的项目都有很多模块的，比如本项目中有公共信息(比如 token )、 用户模块
├── modules                         // 模块
    ├── user.ts                     // 用户模块 
├── types.ts                        // 类型
└── index.ts                        // vuex 主入口
```

## 注意事项
import .vue 的文件的时候，要补全 .vue 的后缀，不然 npm run build 会报错的。