/**
 * HTTP响应状态枚举
 *
 * @author qiuwei
 * @date 2016年09月10日
 */
const HTTP_RESPONSE_STATE = {
    SUCCESS: 99999,
    // Others failure state
    // ...
};

const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};


export {
    HTTP_RESPONSE_STATE,
    HTTP_METHOD,
};
