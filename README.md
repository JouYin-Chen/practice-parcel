# Practice react & D3

## Project
  - 練習從頭建立React & Redux & D3, 改用parcel 打包React
  - https://segmentfault.com/a/1190000012327384

## script
  - 安裝package
    `yarn`
  - 啟動project
   `yarn start`

## 使用
  - [x] React
  - [x] React-router
  - [x] css-module

## 步驟
  1. 新增專案
  2. 加入 React component
    `yarn add -SE react react-dom`
  3. 加入 BABEL
    `yarn add -DE babel-preset-react`
  4. 添加 Parcel
    `yarn add -DE parcel-bundler`
  5. 添增 react-router
    `yarn add -SE react-router-dom `
  6. 加入 CSS Modules
    `yarn add -DE babel-preset-env \
                  postcss-modules \
                  autoprefixer \
                  babel-plugin-react-css-modules`

### css-moudle
1. PostCSS 是一个使用插件轉換 CSS 的工具, 建立`.postcssrc`
``` json
  {
    "modules": true,
    "plugins": {
      "autoprefixer": {
        "grid": true
      }
    }
  }
```
2. 修改 .babelrc, plugins添加`react-css-modules`, presets添加`env`,
```
  "plugins": [
    [
      "react-css-modules",
      {
        "generateScopedName": "[path]__[name]__[local]__[hash:base64:5]",
        "handleMissingStyleName": "warn"
      }
    ],
  ],
  "presets": ["env", "react"]
```

  - 參考
    - https://github.com/parcel-bundler/parcel/issues/689
    - https://parceljs.org/transforms.html#postcss
