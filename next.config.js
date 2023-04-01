// const webpack = require('webpack');
// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader"
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           "style-loader",
//           "css-loader",
//           "sass-loader",
//         ],
//       }, {
//         test: /\.(jpe?g|png|pdf|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
//         loader: 'url-loader?limit=100000'
//       },
//       { test: /\.html$/, loader: 'html-loader?attrs[]=video:src' },
//       {
//         test: /\.mp4$/,
//         use: 'file-loader?name=videos/[name].[ext]',
//       },
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   devServer: {
//     contentBase: './dist',
//     hot: true,
//     historyApiFallback: true
//   }
// };

module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}