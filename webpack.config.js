const path = require('path');
const CLIENT_PATH = path.resolve(__dirname, 'src', 'client');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    tactics: path.join(CLIENT_PATH, 'tactics.js'),
    'faceoff-app': path.join(CLIENT_PATH, 'faceoff-app.js'),
    'chaos-app': path.join(CLIENT_PATH, 'chaos-app.js'),
    'classic-app': path.join(CLIENT_PATH, 'classic-app.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {url: false}}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {url: false}},
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? 'dist' : 'static'),
    filename: '[name].min.js'
  },
  optimization: {
    minimize: true
  },
  resolve: {
    alias: {
      tactics: path.join(CLIENT_PATH, 'tactics'),
      util: path.join(CLIENT_PATH, 'util'),
      lib: path.resolve(__dirname, 'lib'),
    }
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
  performance: {hints: false},
};
