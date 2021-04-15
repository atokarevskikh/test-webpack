const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: {
        application: "./src/index.js",
        admin: "./src/admin.js"
    },
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    "postcss-loader",
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, 
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf|otf|wav)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "[name].[hash:7].[ext]"
                        }
                    },
                    { loader: "image-webpack-loader" }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}