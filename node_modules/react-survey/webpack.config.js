const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./demo/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: ["./demo/index.js"],
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js",
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
