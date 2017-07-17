import React from 'react';
import PropTypes from 'prop-types';
const Counter = ({ content }) =>
    <div>{ content }</div>;

Counter.propTypes = {
    content: PropTypes.number
};

export default Counter;
