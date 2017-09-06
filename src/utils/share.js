/**
 * 设置分享
 *
 */

/* eslint-disable no-undef */

import packageJSON from '../../package.json';
import { ENV } from './env';
import require from './require';
import httpProxy from '../net/httpProxy';
import { HTTP_METHOD } from '../constants/http';
import URL from '../constants/api';

const WECHAT_API_SRC = 'jweixin-1.0.0.js';
const QQ_API_SRC = 'qqapi.js';
const __DEVELOPMENT__ = process.env.NODE_ENV === 'development';

export default new class {

    constructor() {
        // TODO: initialize code
    }

    setupWeChat(targetURL, title, desc) {
        console.info('正在设置微信分享');

        httpProxy(URL.WX_CONFIG_URL, HTTP_METHOD.POST, { url: targetURL })
            .then((configObject) => {
                require(WECHAT_API_SRC, function() {
                    if (!wx) {
                        return console.error('初始化wechat js sdk失败');
                    }

                    wx.config(Object.assign({}, configObject, {
                        debug: __DEVELOPMENT__,
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                        ],
                    }));

                    const shareData = {
                        title,
                        desc,
                        link: targetURL,
                        imgUrl: packageJSON.logo,
                    };

                    wx.ready(() => {
                        wx.onMenuShareAppMessage(shareData);
                        wx.onMenuShareTimeline(shareData);
                        wx.onMenuShareQQ(shareData);
                        wx.onMenuShareQZone(shareData);
                        console.info('设置微信分享完成', shareData);
                    });

                    wx.error((res) => {
                        console.error('设置微信分享失败', res.errMsg);
                    });
                });
            });
    }

    setupQQ(targetURL, title, desc) {
        if (!ENV.isRunInQQ()) {
            return console.info('未运行在QQ环境中');
        }

        console.info('设置QQ分享');
        require(QQ_API_SRC, function() {
            const shareData = {
                share_url: targetURL,
                title,
                desc,
                image_url: packageJSON.logo,
            };

            mqq.data.setShareInfo(shareData);
            console.info('设置QQ分享完成', shareData);
        });
    }

    setup(targetURL = '未设置', title = '未设置', desc = '未设置') {
        console.groupCollapsed('设置分享');
        this.setupWeChat(targetURL, title, desc);
        this.setupQQ(targetURL, title, desc);
        console.groupEnd();
    }
};

/* eslint-enable no-undef */
