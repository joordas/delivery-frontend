const path = require("path");

module.exports = {
  entry: "./src/ClientApp.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    hot: true,
    publicPath: "/public",
    historyApiFallback: true
  }
};
