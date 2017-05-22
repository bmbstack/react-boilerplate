#react-boilerplate

## History
- 2017年5月22日 version 2.0.3
    - 修复一个小问题 为了配合antd脚手架使用 css-loader不应排除node_modules
    - 添加一个小插件 prop-types，符合react官方要求，因为 

    ```javascript
    PropTypes via the main React package is deprecated
    ```

    ```
    <!--旧的引用方法-->
    import React, { PropTypes } from 'react';
    
    <!--新的引用方法-->
    import React from 'react';
    import PropTypes from 'prop-types';
    ```
    这样在控制台还是会警告，是`antd`引用`PropTypes`方法错误，导致的，可忽略
- 2017年04月06日 version 2.0.2
    - 添加compression中间件
- 2017年03月25日 version 2.0.1
    - 修复webpack-dev-middleware无法加载src/static目录中资源的问题
- 2017年03月24日 Version 2.0.0
    - 需要**升级node**到最新stable版本
- 2017年03月24日 Version 1.1.0
    - 添加服务端渲染功能, 使用`yarn start:ssr`启动资源;
    - 添加BrowserHistory服务端示例, 使用`yarn start`启动资源;
    - 添加跳转链接示例
    - 开发模式继续保持hashHistory, 生成模式/预览模式改为BrowserHistory模式, 需要服务端配合修改;
    - 修复httpProxy代理方法中获取服务端返回数据时调用函数报错的问题;
    - src/actions/example.js中发送请求时数据格式不是json, 导致服务端解析报错的问题;

```javascript
// 指定静态资源目录
app.use(express.static(path.join(__dirname, '../dist/production')));

// 任何页面请求均返回唯一页面
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/production/example.html'));
});
```

- 2017年3月04日
    - 将 react，react-dom，antd 等大体积文件使用cdn 分发加载，利用externals，*遇到的坑：*ant中推荐的

```javascript
// AsyncWelcome.lazy.js
import { Button } from 'antd';
```

配合*babel-plugin-import*插件，会编译成 antd/lib/xxx 导致找不到这个模块
解决方法：在.babelrc中删除掉

```json
"plugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "style": "css" }]
],
```

中的 `["import", { libraryName: "antd", style: "css" }]`
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
