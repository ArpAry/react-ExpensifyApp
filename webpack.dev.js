const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
 
module.exports = merge(common, {
  mode: "development",
  devtool: "hidden-source-map",
  devServer: {
    static: path.join(__dirname, "public"),
    historyApiFallback: true
  }
});