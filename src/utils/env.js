/**
 * 环境判断, 是否运行在目标环境中
 *
 * @author qiuwei
 */

import { MOBILE_API } from '../constants/api';

const hasToken = window.location.search.match(/token=/i);

export const IOS_URL = 'https://itunes.apple.com/us/app/zuo-ye-he-zi-xue-sheng-duan/id982502330?l=zh&ls=1&mt=8';
export const ANDROID_URL = 'http://app.knowbox.cn/hz/englishmatch.html';

// 设备类型
export const DEVICE_TYPE = {
    PHONE: Symbol(1),
    PAD: Symbol(2),
};

export const ENV = {
    // 身份判断
    isStudent() {
        return window.location.search.match(/student/i);       
    },
    isTeacher() {
        return window.location.search.match(/teacher/i);
    },

    // 运行环境判断
    isRunInApp() {
        return window.navigator.userAgent.toLowerCase().indexOf('knowbox') > -1 || hasToken;
    },
    isRunInWeChat() {
        return window.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
    },
    isRunInQQ() {
        return window.navigator.userAgent.match(/\sQQ/i);
    },

    // 单词部落 
    // 老师端单词部落环境判断
    isTwordclan() {
        return window.navigator.userAgent.toLowerCase().indexOf('twordclan') > -1 || hasToken,
    }
    // 学生端单词部落环境判断
    isSwordclan() {
        return window.navigator.userAgent.toLowerCase().indexOf('swordclan') > -1 || hasToken,
    }
    // 操作系统判断
    isIOS() {
        return window.navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
    }, 
    isAndroid() {
        return window.navigator.userAgent.match(/android/i);
    },

    // 设备类型判断
    deviceType() {
        /**
         *  // 在css文件中添加下列css代码, 来辅助js判断
         *  body:after {
         *      @media screen and (min-width: 768px) {
         *          content: 'isPad';
         *          display: none;
         *      }
         *  }
         */
        const size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
        if (size.indexOf('isPad') != -1) {
            return DEVICE_TYPE.PAD;
        }

        return DEVICE_TYPE.PHONE;
    },

    // 下载
    download() {
        let downloadUrl = '';

        if (ENV.isIOS())
            downloadUrl = IOS_URL;
        else if (ENV.isAndroid())
            downloadUrl = ANDROID_URL;
        else
            alert('尚未支持的手机操作系统, 请致电作业盒子的程序猿们, 他们会尽量找个借口甩锅.');

        window.location.href = MOBILE_API.DOWNLOAD_URL;
        setTimeout(() => {
            window.location.href = downloadUrl;
        }, 500);
    }
};

