const path = require('path');

module.exports = {
  entry: {
    profile: path.join(__dirname, 'public/javascripts/profile.js'),
  },
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
  stats: 'minimal',
  devtool: 'source-map',
  mode: 'development',
  
};
