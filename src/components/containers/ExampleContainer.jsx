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
        const { DashboardStore, ReportStore, children } = this.props;
        const { dashboardData, size, fetch } = DashboardStore;
        const { otherData } = ReportStore;

        return (
            <div>
                <div>{ dashboardData ? dashboardData : "Loading" }</div>
                <div>{ otherData }{ size.width }</div>
                <button onClick={ fetch }>Click Me</button>
                { children }
            </div>
        );
    }
}

export default ExampleContainer;
