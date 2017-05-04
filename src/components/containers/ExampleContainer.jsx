import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

@inject('DashboardStore')
@inject('ReportStore')
@observer
class ExampleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { DashboardStore, ReportStore } = this.props;
        const { dashboardData, size, fetch } = DashboardStore;
        const { otherData } = ReportStore;

        return (
            <div>
                <div>{ dashboardData ? dashboardData : "123Hello World" }</div>
                <div>{ otherData }{ size.width }</div>
                <button onClick={ fetch }>Click Me</button>
            </div>
        );
    }
}

export default ExampleContainer;
