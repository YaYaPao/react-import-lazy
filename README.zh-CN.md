简体中文 | [English](./README.md)

# React-import-lazy

`react-import-lazy` 用来异步加载并且提供降级渲染，通常被用来降低首屏渲染时间!

我们提供两种方法:

- `LazyImport()` 基于 [React Lazy](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy) 来动态渲染组件
- `AsyncImport()` 基于 `import().then()` 方法来动态加载组件

## 用法

执行 `npm install react-import-lazy --save` 或者 `yarn add react-import-lazy --save` 进行安装

然后，你可以按照如下示例进行使用

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { LazyImport, AsyncImport } from 'react-import-lazy'

const Test = AsyncImport({
  action: import('./App'),
  loading: <span>loading</span>
})

ReactDOM.render(
  <React.StrictMode>
    {<Test />}
  </React.StrictMode>,
  document.getElementById('root')
)
```

事实上，我开发这个工具主要用来配合 `react-router` 使用



## Props

| Property | Description    | Type            | Default              |
| -------- | -------------- | --------------- | -------------------- |
| action   | 用来进行包引入 | any             | -                    |
| loading  | 降级渲染内容   | React.ReactNode | `<div>loading</div>` |





## 关于

如果你也想开发一个 npm 包，你可以参考  [npm-template](https://github.com/Y-lonelY/npm-template)，欢迎 star and fork👏!



 