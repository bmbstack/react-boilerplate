#react-boilerplate

## History
- 2017年02月07日
    - 在生产版本中添加CDN服务
        - react.js和react-dom.js
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
