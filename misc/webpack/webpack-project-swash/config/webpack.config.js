const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = "development"

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
]

if(process.env.NODE_ENV === "production"){
  mode = "production"
} else {
  plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
  mode: mode,

  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    path: path.resolve(__dirname ,'dist')
  }, 
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    static: './dist',
    hot: true,
  }
}