const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "app.bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    publicPath: "./dist"
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            favicon: "./src/favicon.png",
            hash: true,
            title: "Webpack Starter",
            template: "./src/index.ejs"
        }),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    }

}