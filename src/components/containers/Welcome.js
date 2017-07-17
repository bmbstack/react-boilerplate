import React from 'react';
import PropTypes from 'prop-types';
const Welcome = ({ params: { content }, location: { query } }) =>
    <div>Yes { content } { JSON.stringify(query) }</div>;

Welcome.propTypes = {
    params: PropTypes.object,
    location: PropTypes.object,
};

export default Welcome;
