简体中文 | [English](./README.en_US.md)

# React-import-lazy

> `react-import-lazy` 在 React 内使用，用来异步加载模块并提供降级渲染，一个常用的场景是优化首屏渲染!

**👏欢迎 fork 进行学习，交流**

提供两种方法，可以根据实际场景各取所需:

- `LazyImport()` 基于 [React Lazy](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy) 来动态渲染组件
- `AsyncImport()` 基于 `import().then()` 方法来动态加载组件


## 用法

执行 `npm install react-import-lazy --save` 或者 `yarn add react-import-lazy --save` 进行安装

这里有一个简单的例子

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { LazyImport, AsyncImport } from 'react-import-lazy'

const Test = AsyncImport({
  action: import('./App'),
  loading: <span>loading</span>
})

// 或者，使用 LazyImport，它们效果是一样的，内部实现方式有所区别，建议使用 AsyncImport
const Test = LazyImport({
  action: import ('./App'),
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

如果你也想开发一个 npm 包，你可以参考 [npm-template](https://github.com/Y-lonelY/npm-template) 来快速构建属于你的 npm package，欢迎 star and fork👏!


**Solo with code✨**