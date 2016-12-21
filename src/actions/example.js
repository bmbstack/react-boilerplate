import * as ActionTypes from './actionTypes';
import asyncActionCreator from './asyncActionCreator';
import { WEB_API } from '../constants/api';
import { HTTP_METHOD } from '../constants/http';

export const increase = (count = 1) => ({
    type: ActionTypes.increase,
    payload: { count }
});

export const increaseAsyncRequest = () => ({
    type: ActionTypes.increaseAsyncRequest,
    payload: {}
});

export const increaseAsyncSuccess = (count) => ({
    type: ActionTypes.increaseAsyncSuccess,
    payload: { count }
});

export const increaseAsyncFailure = (error) => ({
    type: ActionTypes.increaseAsyncFailure,
    payload: { error }
});

export const increaseAsync = (count = 1) => asyncActionCreator(
    WEB_API.EXAMPLE_INCREASE_APPLE_URL,
    increaseAsyncRequest,
    increaseAsyncSuccess,
    increaseAsyncFailure,
    HTTP_METHOD.POST,
    count,
    false
);
