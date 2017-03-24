/**
  * development env
  */

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const os = require('os');

const WebpackShellPlugin = require('webpack-shell-plugin');

const baseConfig = require('./webpack.config.base');

const PORT = 8081;
const isWindows = os.platform() === 'win32';

const result = merge(baseConfig, {
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 环境定义
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
                IS_WINDOWS: `${isWindows}`
            }
        }),
        // 自动打开浏览器
        new WebpackShellPlugin({
            onBuildStart: ['echo 代码狗, 就知道你还没下班😂   ---- 来自编译器的嘲讽'],
            onBuildEnd: [`${isWindows?'start':'open'} http://localhost:${PORT}/example.html`]
        })
    ],
    debug: true,
    devtool: 'source-map',
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        assets: true,
    },
    progress: true,
    keepalive: true,
    watchOptions: {
        aggregateTimeout: 500, //ms, default is 300
        poll: true
    },
});

module.exports = result;
