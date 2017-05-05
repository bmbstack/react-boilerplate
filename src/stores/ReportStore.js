import { observable, computed, action } from 'mobx';
import InnerStore from './InnerStore';

class ReportStore {
    @observable someData = 'Hello Report';
    @observable.ref innerStore = [];

    @computed get otherData() {
        return this.someData + '====';
    }

    @action setInnerStores(stores = []) {
        this.innerStore = stores.map(({ id, label }) => new InnerStore(id, label));
    }
}

export default ReportStore;
