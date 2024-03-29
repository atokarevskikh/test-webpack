const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        application: "./src/javascripts/index.js"
    },
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: "[name]-[contenthash].js",
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
        new HtmlWebpackPlugin({
            title: "Webpack and Git for beginners",
            template: path.resolve(__dirname, "./src/template.html"), 
            filename: "index.html", 
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].css"
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        alias: {
            CssFolder: path.resolve(__dirname, "src/stylesheets"),
            ImagesFolder:  path.resolve(__dirname, "src/images"),
            ScriptsFolder:  path.resolve(__dirname, "src/javascripts")
        },
        modules: [
            path.resolve(__dirname, "src/libs"),
            "node_modules"
        ]
    }
}