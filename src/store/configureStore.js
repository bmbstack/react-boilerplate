/* global process */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.production');
} else if(process.env.NODE_ENV === 'preview') {
    module.exports = require('./configureStore.preview');
} else {
    module.exports = require('./configureStore.development');
}
