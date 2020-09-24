简体中文 | [English](./README.md)

# React-import-lazy

`react-import-lazy` is used to load the packages asynchronously and reduce the first page rendering time!

It provides two function:

- `LazyImport()` based on [React Lazy](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy) to render the component dynamicaly
- `AsyncImport()` based on `import().then()` function to import the component dynamicly

## Usage

Run `npm install react-import-lazy --save` or `yarn add react-import-lazy --save` to install it

Then you can use just like this

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

In fact, i develop this mainly used to cooperate with `react-router`



## Props

| Property | Description                          | Type            | Default              |
| -------- | ------------------------------------ | --------------- | -------------------- |
| action   | Used to import the packages          | any             | -                    |
| loading  | When importing, something to display | React.ReactNode | `<div>loading</div>` |





## About

If you want to develop a npm library, you can see [npm-template](https://github.com/Y-lonelY/npm-template), welecome to star and fork!

