import React, { PropTypes } from 'react';

const Counter = ({ content }) =>
    <div>{ content }</div>;

Counter.propTypes = {
    content: PropTypes.number
};

export default Counter;
