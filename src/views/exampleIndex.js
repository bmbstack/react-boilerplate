/* global process */

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preview') {
    module.exports = require('./exampleIndex.production.js');
} else {
    module.exports = require('./exampleIndex.development.js');
}
