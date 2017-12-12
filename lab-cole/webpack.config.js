'use strict';

// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');

// Makes a separate CSS bundle
const ExtractPlugin = reuqire ('extract-text-webpack-plugin');

module.exports = {
  
  //Load this and everything it cares about
  entry: `${__dirname}/src/main.js`,
  
  devServer: {
    historyApiFallback:true
  },
  
  devTool: 'source-map',

  // Stick it into the "path" folder with that file name
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`
  },

  plugins: [
    new HTMLPlugin({
      template:`${__dirname}/src/index.html`
    }),
    new ExtractPlugin('bundle.[hash].css')
  ],

  module: {
    rules: [
      // If it's a .js file not in node_modules, use the babel.loader
      {
        test: /\.scss$/,
      }
    ]
  }
}