import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import record from '../middleware/record';
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, record)
);

export default configureStore;
