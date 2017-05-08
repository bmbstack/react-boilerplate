import React, { Component } from 'react';

class Demo1Container extends Component {
    constructor(props) {
        super(props);
    }

    handleSayHi() {
        console.info('Hi Demo1');
    }

    render() {
        return (
            <div>Demo1Container</div>
        );
    }
}

export default Demo1Container;
