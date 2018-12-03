
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
        test: /\.css$/, loader: "style-loader!css-loader",
      }
    ]
  }
}
