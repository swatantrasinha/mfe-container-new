const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin= require('webpack/lib/container/ModuleFederationPlugin'); 
const commonConfig = require('./webpack.common');
const packageJson= require('../package.json');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@https://mfe-marketing.herokuapp.com/dist/remoteEntry.js',
            },
            shared : packageJson.dependencies,
        }),
    ]
};

module.exports= merge(commonConfig, devConfig);

// marketing: 'marketing@http://localhost:8081/remoteEntry.js',
// marketing: 'marketing@http://localhost:5000/dist/remoteEntry.js',
// marketing: 'marketing@https://mfe-marketing.herokuapp.com/dist/remoteEntry.js',
