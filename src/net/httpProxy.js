/**
 * 统一请求方式
 */
require('es6-promise').polyfill();

import axios from 'axios';
import storage, { AUTHORIZATION_KEY } from '../utils/storage';
import { HTTP_METHOD } from '../constants/http';

/**
 * axios
 *
 * need to import 'axios' at top
 * https://github.com/mzabriskie/axios
 */
export default function httpProxy(url, method = HTTP_METHOD.GET, data = {}, credentials = false) {
    const options = {
        url,
        method,
        headers: {
            'Authorization': storage.getData(AUTHORIZATION_KEY) || 'token will be here',
        },
        withCredentials: credentials
    };

    if (method !== HTTP_METHOD.GET) {
        options.headers['Accept'] = 'application/json';
        options.headers['Content-Type'] = 'application/json;charset=UTF-8';
        options.data = data;
    }
    if (method === HTTP_METHOD.GET) {
        options.params = data;
    }

    return axios(options);
}

httpProxy.request = async () => {
    const response = await httpProxy(...arguments);
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error(`HTTP(${URL}) ERROR(${response.statusText})`);
    }
};
