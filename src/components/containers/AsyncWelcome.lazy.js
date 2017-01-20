import React, { PropTypes } from 'react';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';

const AsyncWelcome = () =>
    <div>
        <DatePicker />
    </div>;

AsyncWelcome.propTypes = {
    location: PropTypes.object,
};

export default connect()(AsyncWelcome);
