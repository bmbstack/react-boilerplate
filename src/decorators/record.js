import request from '../utils/request';

/**
 * 埋点 
 * @param {string} url - 记录埋点数据的地址 
 */
const record = (url) => (target, name, descriptor) => {
    const origin = descriptor.value;

    descriptor.value = () => {
        const args = Array.from(arguments);

        if (url) {
            request(url);
        }

        return origin.apply(this, args);
    };

    return descriptor;
};

export default record;
