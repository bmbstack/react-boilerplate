import httpProxy from '../net/httpProxy';
import { HTTP_METHOD, HTTP_RESPONSE_STATE } from '../constants/http';

export default (URL, 
    request, 
    success, 
    failure, 
    method = HTTP_METHOD.GET, 
    data = {}, 
    certificate = false) => 
    async (dispatch, getState) => { // eslint-disable-line
        dispatch(request());

        try {
            const response = await httpProxy(URL, method, data, certificate);

            if (response.status >= 200 && response.status < 300) {
                const json = await response.json();

                if (HTTP_RESPONSE_STATE.SUCCESS === json.code) {
                    dispatch(success(json.data));
                } else {
                    dispatch(failure(json.msg));
                }
            } else {
                dispatch(failure(`HTTP(${URL}) ERROR(${response.statusText})`));
            }
        } catch (e) {
            /* handle error */
            dispatch(failure(e.message));
        }
    };
