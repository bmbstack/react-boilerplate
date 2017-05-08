import React, { Component } from 'react';

class Demo2Container extends Component {
    constructor(props) {
        super(props);
    }

    handleSayHi() {
        console.info('Hi Demo2');
    }

    render() {
        return (
            <div>Demo2Container</div>
        );
    }
}

export default Demo2Container;
