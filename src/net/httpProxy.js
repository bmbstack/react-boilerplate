/**
 * 统一请求方式
 */

import axios from 'axios';
import storage, { AUTHORIZATION_KEY } from '../utils/storage';
import { HTTP_METHOD } from '../constants/http';

/**
 * Solution 1:
 * Vue-resource
 *
 * need to import 'vue-resource' at top
 */

//Vue.use(VueResource);

//Vue.http.options.root = HOST;
//Vue.http.headers.common['Authorization'] = storage.getData(AUTHORIZATION_KEY) || 'token will be here';

//export default function httpProxy(url, method = HTTP_METHOD.GET, data = {}) {
    //const options = {
        //url,
        //method,
    //};

    //if (method !== HTTP_METHOD.GET) {
        //options['headers'] = {
            //'Accept': 'application/json',
            //'Content-Type': 'application/json;charset=UTF-8',
        //};
        //options['body'] = data;
    //} else {
        //options['params'] = data;
    //};

    //return Vue.http(options);
//};

/**
 * Solution 2:
 * fetch
 *
 * need to import 'isomorphic-fetch' at top
 */
//export default function httpProxy(url, method = HTTP_METHOD.GET, data = {}, credentials = 'include') {
    //const options = {
        //method,
        //headers: {
             //'Authorization': storage.getData(AUTHORIZATION_KEY) || 'token will be here',
        //},
        //credentials,
    //};

    //if (method !== HTTP_METHOD.GET) {
        //options.headers['Accept'] = 'application/json';
        //options.headers['Content-Type'] = 'application/json;charset=UTF-8';
        //options.body = JSON.stringify(data);
    //}

    //return fetch(url, options);
//};

/**
 * Solution 3:
 * axios
 *
 * need to import 'axios' at top
 * https://github.com/mzabriskie/axios
 */
export function httpAxios(URL, method = HTTP_METHOD.GET, data = {},token='', credentials = false) {
    return (
        async () => {
            const httpURL = URL + (token ? '&token='+token : '');
            response = await httpProxy(httpURL, method, data, credentials );

            if (response.status >= 200 && response.status < 300) {
                return response.data;
            } else {
                throw new Error(`HTTP(${URL}) ERROR(${response.statusText})`);
            }
        }
    )()
}

/**
 * Solution 3:
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
