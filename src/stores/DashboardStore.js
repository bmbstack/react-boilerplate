import { observable, computed, action, autorun } from 'mobx';

class DashboardStore {
    @observable dashboardData = '';
    @observable size = { width: 10, height: 20 };

    @computed get otherData() {
        return this.dashboardData + '123321';
    }

    @action fetch = async () => {
        // mock http request
        const response = await new Promise(resolve => setTimeout(() => resolve(222), 2000));
        this.dashboardData = response;

        this.size.width = 1;
    }
}

export default new DashboardStore();
