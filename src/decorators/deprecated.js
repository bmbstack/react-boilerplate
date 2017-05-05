/**
 * 即将过期
 * @param {string} message - 警告消息
 */
const deprecated = (message = '%s is deprecated.') => (target, name, descriptor) => {
    const origin = descriptor.value;
    console.dir(descriptor)

    descriptor.value = function() {
        console.warn(message, origin.name);
        const args = Array.from(arguments);
        return origin.apply(this, args);
    }

    return descriptor;
};

export default deprecated;
