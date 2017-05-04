import React, { PropTypes } from 'react';
import * as Style from './Counter.sass';

const Counter = ({ content }) =>
    <div className={ Style.red }>{ content }</div>;

Counter.propTypes = {
    content: PropTypes.number
};

export default Counter;
