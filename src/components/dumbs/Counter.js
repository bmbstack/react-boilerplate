import React from 'react';
import * as Style from './Counter.sass';

const Counter = ({ content }) =>
    <div className={ Style.red }>{ content }</div>;

export default Counter;
