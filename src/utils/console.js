/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'development' && window.console) {
/* eslint-enable no-undef */
    const config = {
        log: {
            color: 'gray',
            'background-color': '#EEE',
        },
        info: {
            color: 'blue'
        },
        warn: {
            color: 'orange'
        },
        debug: {
            color: 'pink'
        } 
    };

    Object.entries(config).forEach(([ key, value ]) => {
        const fn = window.console[key];

        window.console[key] = function() {
            const args = [].slice.call(arguments).map((item) => {
                return `%c${item}`;
            });

            const style = [];
            Object.entries(value).forEach(([ key, value ]) => {
                style.push(`${key}: ${value}`);
            });
            args.push(style.join(';'));

            fn.apply(this, args);
        };
    });
}
