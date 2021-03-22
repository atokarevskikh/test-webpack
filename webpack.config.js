const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: "application.js",
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
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, 
                    "sass-loader"
                ],
            }
        ]
    }
}