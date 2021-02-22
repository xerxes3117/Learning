const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  output: {
    // publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  }
}