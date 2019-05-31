const path = require('path');

module.exports = {
  entry: {
    'phaser-web-tutorial': './src/phaser-web-tutorial/phaser-web-tutorial.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development'
};