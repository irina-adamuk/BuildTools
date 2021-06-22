const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleanalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
   mode: 'production',
   entry: path.resolve(__dirname, 'src', 'main.js'),
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].bundle.js'
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
         },
         {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         },
         {
            test: /\.(png|jpe?g|gif|mp3)$/i,
            loader: 'file-loader'
         }
      ]
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'index.html')
      }),

      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),

      new BundleanalyzerPlugin()
   ]
};