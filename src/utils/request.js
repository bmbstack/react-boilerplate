/**
 * 发起不需要关注结果的请求 
 * @param {string} url - 请求的目标地址
 */
export default function request(url) {
    var URL = url + (url.indexOf('?') > -1 ? '&' : '?') + (+new Date);

    if (window.navigator.sendBeacon) {
        // 即使页面跳转, 浏览器页会尽可能坚强的发送一个请求出去
        window.navigator.sendBeacon(url);
    } else {
        (new Image()).src = URL;
    }
};
