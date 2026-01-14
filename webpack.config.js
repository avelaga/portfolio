const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|pdf|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
        options: { limit: 100000 },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: { list: [{ tag: "video", attribute: "src", type: "src" }] },
        },
      },
      {
        test: /\.mp4$/,
        loader: "file-loader",
        options: { name: "videos/[name].[ext]" },
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    host: "0.0.0.0",
    open: true,
    historyApiFallback: true,
  },
};
