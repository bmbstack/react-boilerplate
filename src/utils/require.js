/**
 * 按需加载js资源
 *
 */

export default function require(resource, done) {
    const node = document.createElement('script');
    node.async = true;
    node.src = resource;

    const supportOnload = 'onload' in node;
    if (supportOnload) {
        node.onload = done;
        node.onerror = function() {
            console.error(`${resource}加载失败`, node);
        };
    } else {
        node.onreadystatechange = function() {
            if (/loaded|complete/i.test(node.readyState)) {
                done.call(node);
            }
        };
    }

    document.getElementsByTagName('head')[0].appendChild(node);
}

