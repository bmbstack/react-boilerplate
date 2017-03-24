import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const AsyncWelcome = () =>
    <div>
        Hello
    </div>;

AsyncWelcome.propTypes = {
    location: PropTypes.object,
};

export default connect()(AsyncWelcome);
