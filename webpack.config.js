var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'app.min.js',
        path: __dirname + '/out'
    },
    devServer: {
        port: 8000,
        publicPath: 'http://localhost:8000'
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
}
