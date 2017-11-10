const path = require('path');

module.exports = {
  entry: {
    app: './app/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
  },
};
