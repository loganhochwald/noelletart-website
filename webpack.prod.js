const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist/client");

module.exports = {
  mode: "production",
  performance: { hints: false },
  entry: {
    app: path.resolve(srcDir, "index.tsx"),
  },
  output: {
    path: distDir,
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(srcDir, "index.html"),
      inject: "body",
    })],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory",
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
          cacheDirectory: true
        }
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};