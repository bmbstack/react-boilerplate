import { observable, computed, action } from 'mobx';

class ReportStore {
    @observable someData = 'Hello Report';
    @computed get otherData() {
        return this.someData + '123321';
    }
}

export default new ReportStore();
