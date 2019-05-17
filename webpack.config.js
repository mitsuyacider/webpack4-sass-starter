const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules:  [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }, 
            {
              loader: "sass-loader",
              options: {
                includePaths: ["src/assets/scss"]
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader'
            ]
        }
      ]
    },
    devServer: {
        inline: true,
        port: 8888,
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin([
          {from: './src/assets', to: './assets' }
        ]),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'head'
      })
    ],        
}