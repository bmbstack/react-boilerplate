// 远程服务器Web API接口
export const WEB_API = {
    HOST: 'http://example.com',
    EXAMPLE_INCREASE_APPLE_URL: '/apple',
};

// 移动端Hybridd接口
export const MOBILE_API = {
    // 下载
    DOWNLOAD_URL: 'myscheme://method',
    // 分享接口
    // platform: 平台
    // data 分享数据
    // jsCallBack: 回调函数, 回调函数参数: "success"完成分享, "fail"分享失败, "cancel"取消分享
    SHARE_URL: 'hybridd://method/doShare',
    // 打开一个Native窗口
    // url 新窗口要加载的页面地址, get参数
    // title 新窗口导航栏标题, get参数
    OPEN_NEW_WINDOW_URL: 'hybrid://method/openNewWindow',
    // 打开浏览器加载地址
    // url 新窗口地址, get参数
    OPEN_BROWSER_URL: 'hybrid://method/openBrowser',
};
