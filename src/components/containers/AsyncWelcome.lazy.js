import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AsyncWelcome = () =>
    <div>
        Hello
    </div>;

AsyncWelcome.propTypes = {
    location: PropTypes.object,
};

export default connect()(AsyncWelcome);
