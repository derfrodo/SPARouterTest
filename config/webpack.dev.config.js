//Konfiguration für development

const webpack = require("webpack");
const path = require("path");
const webpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    devtool: "source-map",

    entry: require("./webpack.dev.entry"),
    output: {
        filename: '[name].js',
        path: path.resolve("./public/scripts/"),

        //für dev:
        publicPath: "https://localhost:8088"
    },
    resolve: require("./webpack.resolve"),
    module: require("./webpack.rules"),
    externals:require("./webpack.externals"),
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpackNotifierPlugin({alwaysNotify:true}),
    ]
}

