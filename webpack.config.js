var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] },
                }],
            },
        ]
    },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './server/public/javascripts')
  },
  plugins: [
        new ExtractTextPlugin('../stylesheets/app.css')
    ]
};