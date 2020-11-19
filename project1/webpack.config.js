const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, '..', 'project2').replace(/\\/g, '/'),
          from: '**/*',
          to: path.resolve(__dirname, 'dist', 'resources'),
        },
        {
          context: path.resolve(__dirname, '..', 'project2').replace(/\\/g, '/'),
          from: '**/*',
          to: path.resolve(__dirname, 'resources'),
        },
      ]
    })
  ]
};