import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

import Counter from '../dumbs/Counter';

@inject('DashboardStore')
@inject('ReportStore')
@observer
class ExampleContainer extends Component {
    constructor(props) {
        super(props);

        this.handleAddInnerStores = this.handleAddInnerStores.bind(this);
    }

    handleAddInnerStores() {
        const { ReportStore } = this.props;
        ReportStore.setInnerStores([
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
        ]);

        setTimeout(() => {
            const { innerStore } = ReportStore;
            innerStore[innerStore.length - 1].setLabel('C');
        }, 3000);
    }

    render() {
        const { DashboardStore, ReportStore, children } = this.props;
        const { dashboardData, size, fetch } = DashboardStore;
        const { otherData, innerStore } = ReportStore;

        return (
            <div>
                <Counter content={ 123 }/>
                <div>{ dashboardData ? dashboardData : "Loading" }</div>
                <div>{ otherData }{ size.width }</div>
                <button onClick={ fetch }>Click Me</button>
                <button onClick={ this.handleAddInnerStores }>Yes , add InnerStore</button>
                <div>
                    {
                        innerStore.map(item => <div key={ item.id }>{ item.label }</div>)
                    }
                </div>
                { children }
            </div>
        );
    }
}

export default ExampleContainer;
