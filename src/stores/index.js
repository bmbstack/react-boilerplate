import DashboardStore from './DashboardStore';
import ReportStore from './ReportStore';

import { spy } from 'mobx';

// 由此处统一初始化
// 如果要添加本地存储, 这里再合适不过了

export default {
    DashboardStore: new DashboardStore(),
    ReportStore: new ReportStore(),
};

const actions = [];
const errors = [];
spy((event) => {
    // 全局监视所有的 store 变化
    console.dir(event);
    // http://cn.mobx.js.org/refguide/spy.html
});
