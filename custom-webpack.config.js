const CompressionPlugin = require(`compression-webpack-plugin`);
const fs=require('fs');

const path = require(`path`);
module.exports = {
    plugins: [
        new CompressionPlugin({
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/
        })
    ]
}