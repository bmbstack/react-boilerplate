import * as ActionTypes from '../actions/actionTypes.js';

const reducerMap = {
    [ActionTypes.increase]: (state, payload) => {
        return Object.assign({}, state, {
            appleCount: state.appleCount + payload.count
        });
    },
    [ActionTypes.increaseAsyncRequest]: (state) => {
        return Object.assign({}, state, {
            isOperating: true
        });
    },
    [ActionTypes.increaseAsyncSuccess]: (state, payload) => {
        return Object.assign({}, state, {
            isOperating: false,
            appleCount: state.appleCount + payload.count
        });
    },
    [ActionTypes.increaseAsyncFailure]: (state, payload) => {
        return Object.assign({}, state, {
            isOperating: false,
            error: payload.error
        });
    },
    [ActionTypes.decrease]: (state, payload) => {
        return Object.assign({}, state, {
            appleCount: state.appleCount - payload.count
        });
    },
};

export const INITIALIZE_STATE = {
    appleCount: 2,
    isOperating: false,
    error: '',
};

export default (state = INITIALIZE_STATE, action = {}) => {
    const { type, payload } = action;
    const reducer = reducerMap[type];

    if (reducer) {
        return reducer(state, payload);
    } else {
        return state;
    }
};
