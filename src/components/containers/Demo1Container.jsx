import React, { Component } from 'react';
import record from '../../decorators/record';

class Demo1Container extends Component {
    constructor(props) {
        super(props);
    }

    @record('http://localhost:8081/mounted')
    componentDidMount() {
        
    }

    @record('http://localhost:8081/apple')
    handleSayHi() {
        console.info('Hi Demo1');
    }

    render() {
        return (
            <div onClick={ this.handleSayHi }>Demo1Container1</div>
        );
    }
}

export default Demo1Container;
