import { observable, computed, action, autorun } from 'mobx';
import httpProxy from '../net/httpProxy';
import { WEB_API } from '../constants/api';

class DashboardStore {
    constructor() {
        this.fetch = this.fetch.bind(this);
    }

    @observable dashboardData = '';
    @observable size = { width: 10, height: 20 };

    @computed get otherData() {
        return this.dashboardData + '123321';
    }

    @action async fetch () {
        const response = await httpProxy.request(WEB_API.EXAMPLE_MOCK_URL);

        this.dashboardData = response.data[1].b;
        this.size.width = 1;
    }
}

export default DashboardStore;
