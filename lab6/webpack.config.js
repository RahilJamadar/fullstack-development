const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './gateway/gateway/gateway.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};