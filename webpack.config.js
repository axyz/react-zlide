const ENVIRONMENT = process.env.NODE_ENV || 'production';

const conf = {
    devtool: 'source-maps',
    entry: './index',
    externals: {
    },
    resolve: {
        alias: {},
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'style!css?sourceMap!postcss',
                test: /\.css$/
            },
            {
                include: /node_modules/,
                loader: 'style!css',
                test: /\.css$/
            },
            {
                exclude: /node_modules/,
                loader: 'babel',
                test: /\.jsx?$/
            }
        ],
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }]
    },
    output: {
        filename: 'react-zlide.js',
        library: 'react-zlide',
        libraryTarget: 'umd',
        path: './dist/'
    },
    plugins: [],
    postcss: require('./lib/postcss').processors
};

if (ENVIRONMENT === 'production') {
    conf.externals.react = 'react';
    conf.externals['react-dom'] = 'react-dom';
}

module.exports = conf;
