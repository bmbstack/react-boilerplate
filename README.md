#react-boilerplate

## History
- 2017年3月04日
    - 将 react，react-dom，antd 等大体积文件使用cdn 分发加载，利用externals，*遇到的坑：*ant中推荐的
```javascript
    // AsyncWelcome.lazy.js
    import { Button } from 'antd';
```
    配合*babel-plugin-import*插件，会编译成 antd/lib/xxx 导致找不到这个模块
    解决方法：在.babelrc中删除掉
```
"plugins": [
    "transform-runtime",
    ["import", { libraryName: "antd", style: "css" }]
],
```
中的 `` ["import", { libraryName: "antd", style: "css" }]``
    - *todo* 热加载
- 2017年03月03日
    - 修复一个bug，
    - 在entries.reduce中添加初始值 vendor 提取公共代码
    - 因为new webpack.optimize.CommonsChunkPlugin仅支持这种格式 
        new webpack.optimize.CommonsChunkPlugin(/*name*/'vendor',/*filename*/'js/vendor.js'), 
```javascript
    // webpack.config.base.js
    const entryConfig = entries.reduce((config, item) => {
    ...
}, {
    vendor:['babel-polyfill','react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux', 'redux-thunk', 'antd', 'in-view', 'axios']
});

```
- 2017年02月09日
    - 添加axio推荐的promise垫片，来支持IE浏览器的异步请求
- 2017年02月07日
    - 在生产版本中添加CDN服务
        - react.js和react-dom.js
    - 添加httpAxios函数
- 2017年01月20日
    - 添加异步路由示例, 除了以下示例代码, 其他部分和同步路由没有区别
```javascript
    // webpack.config.base.js
    // ...loaders
    {
        // separate files, bundle.js will be minify
        test: /\.lazy\.js$/i,
        loaders: ['bundle-loader?lazy&name=[name]', 'babel'],
    },

```
```jsx
{/* 
    exampleRoute.js
    ...routes
*/}
<Route path="lazy" getComponent={ (nextState, cb) => loadAsyncWelcome(component => cb(null, component)) } />
```
- 2017年01月17日(1.0.1)
    - 修复生产环境编译错误的问题
- 2017年01月14日(1.0.0)
    - 修复跳转路由时push不生效的bug
    - 修复编译时缺少static目录的bug
