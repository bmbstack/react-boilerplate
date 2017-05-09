/**
 * 埋点 
 * @param {string} url - 记录埋点数据的地址 
 */
const record = (url) => (target, name, descriptor) => {
    const origin = descriptor.value;

    descriptor.value = () => {
        const args = Array.from(arguments);

        if (url) {
            var URL = url + (url.indexOf('?') > -1 ? '&' : '?') + (+new Date);

            if (window.navigator.sendBeacon) {
                // 即使页面跳转, 浏览器页会尽可能坚强的发送一个请求出去
                window.navigator.sendBeacon(url);
            } else {
                (new Image()).src = URL;
            }
        }

        return origin.apply(this, args);
    };

    return descriptor;
};

export default record;
