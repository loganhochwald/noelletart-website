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
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};