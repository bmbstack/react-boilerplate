/* global process */

import { observable, computed, action, autorun } from 'mobx';
import httpProxy from '../net/httpProxy';
import { WEB_API } from '../constants/api';

import authority from '../decorators/authority';
import deprecated from '../decorators/deprecated';

class DashboardStore {
    constructor() {
        if (process.env.NODE_ENV === 'development') {
            autorun('Dashboard store has changed', () => {
                console.dir(this.size.width);
            });
        }
    }

    @observable dashboardData = '';
    @observable size = { width: 10, height: 20 };

    @computed get otherData() {
        return this.dashboardData + '123321';
    }

    @action.bound
    @authority('rule') 
    @authority('rule2') 
    @authority('rule3') 
    @deprecated()
    async fetch () {
        const response = await httpProxy.request(WEB_API.EXAMPLE_MOCK_URL);

        this.dashboardData = response.data[1].b;
        this.size.width = response.data[1].a;
    }
}

export default DashboardStore;
