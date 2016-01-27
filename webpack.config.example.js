var config = require('./webpack.config');

config.entry = [
    './example/index.js'
];

config.output = {
    path: './example/',
    publicPath: '/',
    filename: 'index.js'
};

config.resolve = {
    alias: {
        'react-zlide': '../index'
    },
    extensions: ['', '.js']
};

config.devServer = {
    contentBase: 'example/',
    stats: {colors: true}
};

module.exports = config;
