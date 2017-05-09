/**
 * 权限控制
 * @param {string} rule - 角色名
 */
const authority = (rule) => (target, name, descriptor) => {
    const origin = descriptor.value;

    descriptor.value = function() {
        const args = Array.from(arguments);
        return origin.apply(this, args);
    };

    return descriptor;
};

export default authority;
