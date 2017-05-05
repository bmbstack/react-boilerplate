import { observable, action } from 'mobx';

class InnerStore {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }

    @observable id = 0;
    @observable label = '';

    @action setLabel(label) {
        this.label = label;
    }
}

export default InnerStore;
