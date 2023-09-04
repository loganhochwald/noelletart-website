const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist/client");

module.exports = {
  mode: "development",
  watch: true,
  devtool: "eval-source-map",
  entry: {
    app: path.resolve(srcDir, "index.tsx"),
  },
  output: {
    path: distDir,
    filename: "bundle.js",
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(srcDir, "index.html"),
      inject: "body",
      favicon: "./src/favicon.ico"
    })],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};