const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },

   mode: 'development',

   devServer: {

    static: './dist',

  },

  optimization: {

    runtimeChunk: 'single',

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'To do list app',
      template: './src/index.html',

    }),

  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: '[name][ext]',
   },
   
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.(png|jpg|svg)$/i,
        type: 'asset/resource'
      }
    ],
  },
};
