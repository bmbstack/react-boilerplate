import { MOBILE_API } from '../constants/api';

class Hybird {
    constructor() {
    }

    /**
     * 除target外, 其他参数均应为name:value格式存在
     */
    sendMessage(target, options = {}) {
        const params = Object.entries(options).map(([ key, value ]) => {
            return `${key}=${value}`;
        }).join('&');
        const cmd = target + (params.length ? `?${params}` : '');

        console.warn(`'${cmd}' was executed`);

        window.location.href = cmd;
    }

    /**
     * 打开用户默认浏览器浏览器
     */
    openBrowser(url) {
        this.sendMessage(MOBILE_API.OPEN_BROWSER_URL, { url: encodeURIComponent(url) });
    }

    /**
     * 打开新窗口
     */
    openNewWindow(url, title) {
        this.sendMessage(MOBILE_API.OPEN_NEW_WINDOW_URL, { url: encodeURIComponent(url), title: encodeURIComponent(title) });
    }

    /**
     * 利用端上接口分享信息
     */
    share(platform, text, title, imageUrl, titleUrl, url, description, site, handler) {

        let params = {
            'text': text,
            'imageUrl': imageUrl,
            'title': title,
            'titleUrl': titleUrl,
            'url': url,
            'description': description,
            'site': site,
            'siteUrl': 'http://ssapp.knowbox.cn',
            'type': 2
        };

        params = encodeURIComponent(JSON.stringify(params));

        window.shareCallBack = handler || function() {  };

        this.sendMessage(MOBILE_API.SHARE_URL, {
            platform,
            data: params,
            jsCallBack: 'shareCallback'
        });
    }
}

export default new Hybird();
