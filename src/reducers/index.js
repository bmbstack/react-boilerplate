import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

// Ours reducers
import example from './example';

const rootReducer = combineReducers({
    routing,
    example,
});

export default rootReducer;
