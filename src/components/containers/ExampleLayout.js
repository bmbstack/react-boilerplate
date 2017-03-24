import React, { PropTypes } from 'react'; // eslint-disable-line
import Counter from '../dumbs/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exampleActions from '../../actions/example';
import { Link } from 'react-router';

const ExampleLayout = ({ children, example, increase, increaseAsync }) => 
    <div>
        <Counter content={ example.appleCount } />
        <div>
            { children }
        </div>
        <div>
            <Link to="/welcome/321">Welcome/321</Link>
        </div>
        <div>
            <button onClick={ () => increase() }>Increase</button>
            <br/>
            <button onClick={ () => increaseAsync() }>Increase Async</button>
        </div>
    </div>;

ExampleLayout.propTypes = {
    children: PropTypes.element,
    example: PropTypes.object,
    increase: PropTypes.func,
    increaseAsync: PropTypes.func,
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
