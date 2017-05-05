import DashboardStore from './DashboardStore';
import ReportStore from './ReportStore';

// 由此处统一初始化
// 如果要添加本地存储, 这里再合适不过了

export default {
    DashboardStore: new DashboardStore(),
    ReportStore: new ReportStore(),
};
