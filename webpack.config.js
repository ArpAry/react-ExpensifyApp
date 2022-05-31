const path = require("path");


module.exports=(env) => {
  console.log("env",env);
  return {
    mode: "development",
    entry: "./src/app.js",
    presets: "@babel/preset-env",
    output: {
      path: path.join(__dirname, "public","dist"),
      filename: "bundle.js",
    },
  
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  
    devtool: "eval-cheap-module-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      historyApiFallback: true
    },
  }};
