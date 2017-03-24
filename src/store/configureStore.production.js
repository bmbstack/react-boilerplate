import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import record from '../middleware/record';
import rootReducer from '../reducers';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, record, routerMiddleware(browserHistory))
);

export default configureStore;
