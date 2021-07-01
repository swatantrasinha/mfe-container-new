const {merge} = require('webpack-merge');
const ModuleFederationPlugin= require('webpack/lib/container/ModuleFederationPlugin'); 
const commonConfig = require('./webpack.common');
const packageJson= require('../package.json');
const domain= process.env.PRODUCTION_DOMAIN;
console.log('container app => domain ', domain);

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        // publicPath: "/dist/",
        publicPath: "https://mfe-container.herokuapp.com/dist/",
        // publicPath: "http://localhost:5050/dist/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@https://mfe-marketing.herokuapp.com/dist/remoteEntry.js`
                // marketing: 'marketing@http://localhost:5000/dist/remoteEntry.js',
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports= merge(commonConfig, prodConfig);