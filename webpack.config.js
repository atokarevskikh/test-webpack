const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "application.js",
        path: path.resolve(__dirname, "build")
    }
}