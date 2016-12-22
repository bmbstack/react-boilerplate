import React, { PropTypes } from 'react'; // eslint-disable-line
import Counter from '../dumbs/counter';
import { connect, mapStateToProps, mapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exampleActions from '../../actions/example';

import { DatePicker } from 'antd';

const ExampleLayout = ({ children, example, increase, increaseAsync }) => 
    <div>
        <Counter content={ example.appleCount } />
        <div>
            { children }
        </div>
        <div>
            <DatePicker />
        </div>
        <div>
            <button onClick={ (e) => increase() }>Increase</button>
            <br/>
            <button onClick={ (e) => increaseAsync() }>Increase Async</button>
        </div>
    </div>;

ExampleLayout.propTypes = {

};

function mapState(state) {
    return {
        example: state.example
    };
}

function mapDispatch(dispatch) {
    return bindActionCreators({ ...exampleActions }, dispatch);
}

export default connect(mapState, mapDispatch)(ExampleLayout);
