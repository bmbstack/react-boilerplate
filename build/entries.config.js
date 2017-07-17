const __DEV__ = process.env.NODE_ENV === 'development';

module.exports = __DEV__ ? [
	{
        "name": "example",
        "title": "示例页面",
        "entry": ["./src/views/exampleIndex.js"],
        "template": "./src/template/app.dev.html",
        "description": "开发环境承载页"
    }
] : [
	{
        "name": "example",
        "title": "示例页面",
        "entry": ["./src/views/exampleIndex.js"],
        "template": "./src/template/app.pro.html",
        "description": "承载页"
    }
]
