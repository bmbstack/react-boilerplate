if (process.env.NODE_ENV === 'production') {
    module.exports = require('./exampleIndex.production.js');
} else {
    module.exports = require('./exampleIndex.development.js');
}
